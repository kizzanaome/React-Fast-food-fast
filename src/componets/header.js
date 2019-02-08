import React, { Component } from 'react';
import '../componets/static/css/home.css';

export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <p>3F</p>
          </div>
          <div className="title">
            <h4>FAST FOODS FIRST</h4>
            <h5>3fs service gets you what you need, right when you need it</h5>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
