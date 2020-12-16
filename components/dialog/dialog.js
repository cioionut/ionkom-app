import React, { Component } from 'react';
import styles from './dialog.module.css';
import { Button, Card } from 'react-bootstrap';

const srvNotAvailableMsg = 'Server not available';


function Message(props) {
  // todo: use next public env vars
  let host = 'http://0.0.0.0:5000';
  let apiUrl = `${host}/api/v1`;

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

  if (!isMe) {
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
    <div className={`row ${isMe ? 'justify-content-end' : ''}`}>
      <div className={`card ${styles.messageCard} ${isMe ? styles.bgLightBlue: ''} m-1`}>
          {cardBody}
      </div>
    </div>
  )
}

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
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
        key={idx}/>
    );
    return (
      <div className={`container-fluid ${styles.messageScroll}`}>
        {messageList}
        <div style={{ float:"left", clear: "both" }}
            ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    )
  }
}


class Dialog extends Component {
  constructor(props) {
    super(props);
    this.chatBoxTitle = props.chatBoxTitle || 'My Virtual Asisstant';
    this.serverNotAvailableMsg = "Incerc sa stabilesc conexiunea cu serverul de dialog, incearca te rog peste cateva momente";
    this.sessionExpiredMsg = "Din cauza inactivitatii sesiunea de dialog s-a incheiat, voi deschide o noua conversatie."
    this.restoreSessionWelcomeMsg = "Bine ai revenit! Scrie-mi daca mai ai nevoie de mine!"
    this.stopDialogVariable = "$leg_op"

    this.startUtt = "...";
    let host = 'http://0.0.0.0:5000';
    // let host = 'https://cio-dialogsys.herokuapp.com';
    this.apiUrl = `${host}/api/v1`;
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
            <div className="card-body d-flex flex-column p-1">
                <MessageList messages={this.state.dialog}
                  handleDialogChange={this.handleDialogChange}
                  handleResponse={this.handleResponse}
                  dialogState={this.state.apiResponse.dialog_state}
                />
                <form onSubmit={this.handleSubmitForm} className="mt-3 p-1">
                  <div className="input-group">
                    <input type="text" className="form-control" id="utterance" autoComplete="off"
                      value={this.state.utterance}
                      onChange={this.handleUtteranceChange} 
                      placeholder={this.startUtt}
                    />
                    <Button type='submit' className={`float-right ${styles.submitBtn} ml-1`} color="primary" type="submit">Send</Button>
                  </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
}

export default Dialog;
