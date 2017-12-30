import React, { Component } from 'react';
import './Logo.css';
class Logo extends Component {
    render() {
      return (
        <div className="Header">
        <div className="Logotype">
            <img src = "./img/logo.jpg" alt ="Девчуля-кисуля"></img>
        </div>
        </div>
      );
    }
  }
  
  export default Logo;