import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import data from './data.json';

const oneHorn = data.filter(beast => beast.horn === 1);
const twoHorn = data.filter(beast => beast.horn === 2);
const hundredHorn = data.filter(beast => beast.horn === 100);

class DropDown extends React.Component {

  render() {
    return(
      <Container>
        <Form>
          <Form.Group controlId="HornForm">
            <Form.Label>How many Horns?</Form.Label>
            <Form.Control as="select" multiple>
              <option>{oneHorn}</option>
              <option>{twoHorn}</option>
              <option>{hundredHorn}</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default DropDown;