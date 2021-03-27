import React from 'react';
import './Main.css';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {
  render() {
  
    return(
      <>
    {data.map((beast) => (
      
    <HornedBeast
      name = {beast.keyword}
      title = {beast.title}
      imgUrl = {beast.image_url}
      description = {beast.description}
    />
    ))
  }
      </>
    )
  }
}


export default Main