import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      likes: 0,
      fire: ''
    }
  }

  buttonClicked = () => {
    this.setState({
      likes: this.state.likes + 1,
      fire: this.state.fire + '🔥'
    });
    this.props.handleClick({
      title: this.props.title,
      description: this.props.description,
      imgUrl: this.props.imgUrl
    })
  }

  render() {
    
    return (
      <Card style={{width: '35rem'}}>
        <Card.Img variant="top" src={this.props.imgUrl} style={ {width: '50%' }} />
        <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>{this.props.description}
      <div>{this.state.likes}{this.state.fire}</div>
      <Button onClick={this.buttonClicked}>This is a dope HornedBeast yo
      </Button>
      </Card.Text>
    </Card.Body>
  </Card>
    )
  }
}

export default HornedBeast;