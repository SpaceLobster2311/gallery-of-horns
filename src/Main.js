import React from 'react';
import './Main.css';
import HornedBeast from './HornedBeast';
import beastImg from './img/unicorn.jpeg'
import rhinoImg from './img/rhino.jpeg'
import data from './data.json'

class Main extends React.Component {
  render() {
    console.log(data)
    return(
      <div className="monster">
        {data.map(beast => <HornedBeast title={beast.title}/>)}
        {data.map(picture => <HornedBeast imgUrl={picture.image_url} />)}
        {data.map(desc => <HornedBeast description={desc.description}/>)}
        {/* <HornedBeast title={this.props.title} imgUrl={this.props.image_url} description={this.props.description} /> */}
        {/* <HornedBeast title='title' imgUrl={'image_url'} description="description" /> */}
        
        {/* <span className="MainMonster">{this.props.MainMonster}</span>
        <span className="description">{this.props.description}</span> */}
      </div>
    )
  }
}

export default Main