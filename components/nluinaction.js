import {
    Container,
    Row,
    Col,
    Form, Button
  } from 'react-bootstrap'
import React from 'react';

import NLUResponse from './nluresponse'
import styles from './nluinaction.module.css'
import nluInitRsp from '../data/nlu_init_rsp'


class NLUinAction extends React.Component {
  constructor(props) {
    super(props);
    this.startUtt = "please show me flights from pittsburgh to new york city on wednesday morning serving breakfast";
    this.urlStr = 'https://cionlu-atis.herokuapp.com/api/v1/nlu';
    // this.urlStr = 'http://localhost:5001/api/v1/nlu';

    this.handleUtteranceChange = this.handleUtteranceChange.bind(this);
    this.handleSubmitFrom = this.handleSubmitFrom.bind(this);

    this.state = {
      nluResponse: nluInitRsp
    };
  }

  handleUtteranceChange(elem) {
    let utt = elem.target.value;
    // check if enter was hitted
    if (utt.charAt(utt.length-1) === '\n')
      this.handleSubmitFrom(elem);
    else
      this.setState({utterance: elem.target.value});
  }

  handleSubmitFrom(elem) {
    elem.preventDefault();

    let url = new URL(this.urlStr);
    let params = {utterance: this.state.utterance};
    url.search = new URLSearchParams(params);

    fetch(url, {
      method: 'GET',
      mode: 'cors'
    })
    .then(res => {
      if (res.status !== 200)
        return undefined
      return res.json();
    })
    .then(response => {      
      if (response)
        this.setState({nluResponse: response})
    })
    .catch(error => console.error('Error:', error));
  }

  componentDidMount() {
    
    this.setState({utterance: this.startUtt});

    let url = new URL(this.urlStr);
    let params = {utterance: this.startUtt};
    url.search = new URLSearchParams(params);

    fetch(url, {
      method: 'GET'
    })
    .then(res => {
      if (res.status !== 200)
        return undefined
      return res.json();
    })
    .then(response => {
      if (response)
        this.setState({nluResponse: response})
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <Container className={styles.nluContent}>
          <Row className='justify-content-center'>
            <Col><h1>Natural Language API demo</h1></Col>
          </Row>
          <Row>
              <Col>
                  <h5>State something</h5>
                  <Form onSubmit={this.handleSubmitFrom}>
                      <Form.Group>
                          <Form.Control as="textarea" rows="3" name="utterance" id="utterance"
                              value={this.state.utterance}
                              onChange={this.handleUtteranceChange} 
                              placeholder={this.startUtt} />
                          <Button className={`float-right ${styles.submitBtn}`} color="primary" type="submit">Analyze</Button>
                      </Form.Group>
                  </Form>
              </Col>
          </Row>
          <Row className="mt-3">
              <Col>
                  <h5>See Language Understanding in action</h5>
                  <NLUResponse
                      intent={this.state.nluResponse.intent}
                      entities={this.state.nluResponse.entities}
                  />
              </Col>
          </Row>
      </Container>
    );
  }
}

export default NLUinAction;
