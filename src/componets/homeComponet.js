import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';
import '../componets/static/css/home.css';
import img from '../componets/static/images/Rolexl.jpg';

export class HomeComponet extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <div className="img-div" id="slider">
            <img src={img} />
          </div>

          <div className="description">
            <h2>We're here for you</h2>
            <ul>
              <li>
                <i className="fa fa-check" />
                Affordable Prices
              </li>
              <li>
                <i className="fa fa-check" />
                Enjoy Amazing Discounts
              </li>
              <li>
                <i className="fa fa-check" />
                Best services ever.
              </li>
              <li>
                <i className="fa fa-check" />
                It is simple.... Just click
              </li>
            </ul>
            <div className="buttons">
              <Link to="/login" className="login-btn">
                login
              </Link>
              <Link to={'/signup'} className="signup-btn">
                signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeComponet;
