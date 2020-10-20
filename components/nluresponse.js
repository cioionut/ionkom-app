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
            <Row>
              <Col sm="12">
                <Table hover>
                  <thead>
                    <tr>
                      <th>Value</th>
                      <th>Type Name</th>
                      <th>Confidence Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entities.map((entity, idx) => {
                      return (
                      <tr key={idx}>
                        <td>{entity.entity_value}</td>
                        <td>{entity.entity_type}</td>
                        <td>{parseFloat(entity.confidence_score).toFixed(3)}</td>
                      </tr>)
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="intent" title="Intent">
            <Row>
              <Col sm="12">
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
              </Col>
            </Row>
          </Tab>
        </Tabs>       
      </div>
    );
  }
}

export default NLUResponse;
