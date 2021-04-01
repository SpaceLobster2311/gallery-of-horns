import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import data from './data.json';

const hornFilter1 = data.filter(horn => horn.includes(1));
const hornFilter2 = data.filter(horn => horn.includes(2));
const hornFilter100 = data.filter(horn => horn.includes(100));
class DropDown extends React.Component {

  render() {
    return(
      <Container>
        <Form>
          <Form.Group controlId="HornForm">
            <Form.Label>Name</Form.Label>
            <Form.Control as="select" multiple>
              <option>{hornFilter1}</option>
              <option>{hornFilter2}</option>
              <option>{hornFilter100}</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default DropDown;