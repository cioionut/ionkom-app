import React, { Component } from 'react';

import {
  Row,
  Col,
  Table,
  Tabs, Tab
} from 'react-bootstrap';


class NLUResponse extends Component {
  render() {
    let entities = this.props.entities || []
    return (
      <div>
        <Tabs defaultActiveKey="entities" id="uncontrolled-tab-example">
          <Tab eventKey="entities" title="Entities">
            <Table hover responsive>
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Type Name</th>
                  <th scope="col">Confidence Score</th>
                </tr>
              </thead>
              <tbody>
                {entities.map((entity, idx) => {
                  return (
                  <tr scope="row" key={idx}>
                    <td>{entity.entity_value}</td>
                    <td>{entity.entity_type}</td>
                    <td>{parseFloat(entity.confidence_score).toFixed(3)}</td>
                  </tr>)
                })}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="intent" title="Intent">
            <Table hover>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Confidence Score</th>
                </tr>
              </thead>
              <tbody>
                <tr key="0">
                  <td>{this.props.intent.intent_type}</td>
                  <td>{parseFloat(this.props.intent.confidence_score).toFixed(3)}</td>
                </tr>
              </tbody>
            </Table>
          </Tab>
        </Tabs>       
      </div>
    );
  }
}

export default NLUResponse;
