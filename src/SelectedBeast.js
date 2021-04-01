import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {

  render() {
    return(
      <Modal show={this.props.show} onHide={this.props.hideBeast}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.beast.title}</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <img src={this.props.beast.imgUrl} alt={this.props.beast.title} />
          <p>{this.props.beast.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={this.props.hideBeast}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    )

  }
}

export default SelectedBeast;
