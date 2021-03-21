import React from 'react';
import './Main.css';
import HornedBeast from './HornedBeast';
import beastImg from './img/unicorn.jpeg'
import rhinoImg from './img/rhino.jpeg'

class Main extends React.Component {
  render() {
    return(
      <div className="monster">
        <HornedBeast title='Unicorn' imgUrl={beastImg} description="This monster is craazy" />
        <HornedBeast title='Rhino' imgUrl={rhinoImg} description="Damn bro look at them horns" />
        
        {/* <span className="MainMonster">{this.props.MainMonster}</span>
        <span className="description">{this.props.description}</span> */}
      </div>
    )
  }
}

export default Main