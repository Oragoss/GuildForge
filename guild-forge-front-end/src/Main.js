import React, { Component } from 'react';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        {/* <Chat /> */}
      </div>
    );
  }
}

export default Main;
