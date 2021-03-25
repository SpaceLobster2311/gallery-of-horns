import React from 'react';
import data from './data.json'

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
      <h2>{this.props.title}</h2>
      <img src={this.props.imgUrl} alt={this.props.title} title={this.props.title} />
      <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast;