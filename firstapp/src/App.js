import React, { Component } from 'react';
import './App.css';
import Logo from './Logo'
import Tabs from './Tabs'
import Description from './Description'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <Logo />
          <Description />
        </div>

        <div className="Navigation">
          <Tabs />
        </div>
      </div>
    );
  }
}

export default App;