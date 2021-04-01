import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns'

import data from './data.json';
import './Main.css';
class Main extends React.Component {
  render() {
  
    return(
      <div>
        <CardColumns>
    {data.map((beast) => (
      // in a working state
    <HornedBeast
      name = {beast.keyword}
      title = {beast.title}
      imgUrl = {beast.image_url}
      description = {beast.description}
    />
    ))
  }
        </CardColumns>
      </div>
    )
  }
}


export default Main
