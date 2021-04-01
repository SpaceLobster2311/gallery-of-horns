
import './App.css';
import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import SelectedBeast from './SelectedBeast'
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

import data from './data.json'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: data,
      beast: {},
    }
  }



  displayModal = (selectedBeast) => {
    this.setState({
      show: true,
      beast: selectedBeast
    });
  }
  
  hideModal = () => {
    this.setState({show: false});
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          data={this.state.data}
          handleClick = {this.displayModal}
        />
        <SelectedBeast
          show={this.state.show}
          hideBeast={this.hideModal}
          beast={this.state.beast}
        
        />
        <Footer />
      </div>
      );
  }
}

export default App;
