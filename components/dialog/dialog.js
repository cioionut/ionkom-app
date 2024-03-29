import React, { Component } from 'react';
import styles from './dialog.module.css';
import { Button, Card, Row, Col } from 'react-bootstrap';

const srvNotAvailableMsg = "I'm trying to establish the connection with the dialog server, please try in a few moments";


function Message(props) {
  // todo: use next public env vars
  const apiUrl = props.apiUrl;
  const output = props.output;
  const isMe = props.isMe;
  const bodyText = isMe ? output : output.text_template;

  const handleOption = (option) => {
    let url = new URL(`${apiUrl}/message`);
    // add user utterance to dialog list 
    props.handleDialogChange({
      isMe: true,
      output: option.label
    });

    let payload = {
      ...option.value,
      "dialog_state": props.dialogState
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      mode: 'cors'
    })
    .then(res => {
      if (res.status !== 200) {
        return undefined
      }
      return res.json();
    })
    .then(props.handleResponse)
    .catch(error => {
      props.handleDialogChange({
        isMe: false,
        output: srvNotAvailableMsg
      });
      console.error('Error:', error)
    });
  }

  let cardBody = (
    <Card.Body className='p-2'>
      {bodyText}
    </Card.Body>)

  if (!isMe && 'generic' in output) {
    output.generic.forEach(outResponse => {
      if (outResponse.response_type === 'option') {
        let optionsPref = outResponse.preference;
        let rspTitle = <b>{outResponse.title}</b>;
        let rspSubtitle = <span>{outResponse.description}</span>
        let options = outResponse.options.map((option, idx) => {
          return (
            <li style={{ cursor: 'pointer' }}>
              <Card.Link
                key={idx} 
                onClick={() => handleOption(option)}>
              {option.label}
              </Card.Link>
            </li>
          )
        })

        cardBody = (
          <Card.Body className='p-2'>
            {rspTitle} <br/>
            {rspSubtitle}
            <ul>
              {options}
            </ul>
          </Card.Body>)
      }
    }) 
  }

  return (
    <Row className={`${isMe ? 'justify-content-end' : ''} px-0`}>
      <Col xs='auto' className={`${styles.messageCard} px-0`}>
        <Card className={`${isMe ? styles.bgLightBlue: ''} m-1`}>
          {cardBody}
        </Card>
      </Col>
    </Row>
  )
}

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth", block: "nearest"});
  }

  componentDidUpdate() {
    // avoid main page scroll
    // verify if more than one messages exists before scroll
    if (this.props.messages && this.props.messages.length > 1)
      this.scrollToBottom();
  }

  render() {
    const objMessages = this.props.messages
    let messageList = objMessages.map((message, idx) => 
      <Message 
        output={message.output}
        isMe={message.isMe}
        handleDialogChange={this.props.handleDialogChange}
        handleResponse={this.props.handleResponse}
        dialogState={this.props.dialogState}
        apiUrl={this.props.apiUrl}
        key={idx}/>
    );
    return (
      <div className={`${styles.messageScroll} p-3`} >
        {messageList}
        <div ref={(el) => { this.messagesEnd = el; }}></div>
      </div>
    )
  }
}


class Dialog extends Component {
  constructor(props) {
    super(props);
    this.apiUrl = props.apiUrl;
    this.chatBoxTitle = props.chatBoxTitle || 'Ionkom Asisstant';
    this.serverNotAvailableMsg = srvNotAvailableMsg;
    this.stopDialogVariable = "$need_operator"

    this.startUtt = "...";
    this.handleUtteranceChange = this.handleUtteranceChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleDialogChange = this.handleDialogChange.bind(this);

    this.state = {
      stopDialog: false,
      dialog: [],
      apiResponse: {},
      utterance: ""
    };
  }

  handleResponse(response) {      
    if (response)  {
      this.setState(state => {
        let newDialog = [...state.dialog];
        let rspOutputs = [];
        let stopDialog = false;
        response.outputs.forEach(output => {
          rspOutputs.push({
            isMe: false,
            output
          });
        });
        
        // prompt only first response in case of stopDialog
        // todo: Fix in dialog engine
        stopDialog = response.dialog_state.context_variables[this.stopDialogVariable];
        if (stopDialog && rspOutputs.length > 0)
          newDialog.push(rspOutputs[0])
        else
          newDialog = newDialog.concat(rspOutputs)

        return {
          apiResponse: response,            
          dialog: newDialog,
          stopDialog: stopDialog
        }
      });
    }
  }

  componentDidMount() {
    let url = new URL(this.apiUrl + "/message");
    let payload = {
      "input": {
        "text": this.state.utterance
      }
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      mode: 'cors'
    })
    .then(res => {
      if (res.status !== 200)
        return undefined
      return res.json();
    })
    .then(this.handleResponse)
    .catch(error => {
      this.setState(state => {
        let new_dialog = [...state.dialog]
        new_dialog.push({
          isMe: false,
          output: {text_template: this.serverNotAvailableMsg}
        })
        return {
          dialog: new_dialog
        }
      });
      console.error('Error:', error)
    });
  }

  handleUtteranceChange(elem) {
    elem.preventDefault();
    let utt = elem.target.value;
    // check if enter was hitted
    if (utt.charAt(utt.length-1) === '\n')
      this.handleSubmitForm(elem);
    else
      this.setState({utterance: elem.target.value});
  }

  handleDialogChange(dialog) {
    this.setState(state => {
      let new_dialog = [...state.dialog] 
      new_dialog.push(dialog);
      return { dialog: new_dialog }
    });
  }

  handleSubmitForm(elem) {
    elem.preventDefault();
    let url = new URL(`${this.apiUrl}/message`);
    // add user utterance to dialog list
    this.setState(state => {
      let new_dialog = [...state.dialog] 
      new_dialog.push({
        isMe: true,
        output: this.state.utterance
      });
      return { dialog: new_dialog }
    });

    let payload = {
      "input": {
        "text": this.state.utterance
      },
      "dialog_state": this.state.apiResponse.dialog_state
    }
    this.setState({utterance: ""});

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      mode: 'cors'
    })
    .then(res => {
      if (res.status !== 200) {
        return undefined
      }
      return res.json();
    })
    .then(this.handleResponse)
    .catch(error => {
      this.setState(state => {
        let new_dialog = [...state.dialog]
        new_dialog.push({
          isMe: false,
          output: {text_template: this.serverNotAvailableMsg}
        })
        return {
          dialog: new_dialog
        }
      });
      console.error('Error:', error)
    });
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h5>{this.chatBoxTitle}</h5>
          </div>
          <div className="card-body p-0">
            <MessageList messages={this.state.dialog}
              handleDialogChange={this.handleDialogChange}
              handleResponse={this.handleResponse}
              dialogState={this.state.apiResponse.dialog_state}
              apiUrl={this.apiUrl}
              messagesEnd={ this.messagesEnd }
            />
            <form onSubmit={this.handleSubmitForm} className="mt-3 p-2">
              <div className="input-group">
                <input type="text" className="form-control" id="utterance" autoComplete="off"
                  value={this.state.utterance}
                  onChange={this.handleUtteranceChange} 
                  placeholder={this.startUtt}
                />
                <Button type='submit' className={`${styles.submitBtn} ms-1`} color="primary">Send</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;
