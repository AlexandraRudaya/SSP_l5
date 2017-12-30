import React, { Component } from 'react';
import './Description.css';
class Description extends Component {
    render() {
      return (
        <div className="Description">

          <div className="Author">
            <h3> Alexandra Rudaya </h3>
          </div>

          <div className="Login">
            <p> rudashka-котик </p>
          </div>

          <div className="Info">
            <p> Учусь в БрГТУ, на специальности ИИ. 4 курс.Скоро конец
            <i class="fa fa-graduation-cap" aria-hidden="true"></i> Где работать??</p>
            <hr></hr>
          </div>

          <div className="Contacts">
            <p><i class="fa fa-facebook" aria-hidden="true"></i> @facebook</p>
            <p><i class="fa fa-map-marker" aria-hidden="true"></i> Belarus,BY </p>
            <p><i class="fa fa-twitter" aria-hidden="true"></i> <a href="http:\\\\twitter.com\\rudaya">twitter</a></p>
            <p><i class="fa fa-envelope" aria-hidden="true"></i> rudaya2711@gmail.com </p>
          </div>
       
        </div>
      );
    }
  }
  
  export default Description;