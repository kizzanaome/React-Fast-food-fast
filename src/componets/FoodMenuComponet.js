import React, { Component } from 'react';
import './static/css/foodmenu.css';
import Header from './header';
import imgb from '../componets/static/images/menu1.jpg';

export class FoodMenuComponet extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <div className="content">
            {/* <!--menu--> */}
            <div className="side-menu">
              <ul>
                <li>
                  <a href="">Categories</a>
                  <ul>
                    <li>
                      <a href="">lorem</a>
                    </li>
                    <li>
                      <a href="">lorem</a>
                    </li>
                    <li>
                      <a href="">lorem</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <!--Foods--> */}
            <div className="content-wrapper">
              <div className="foods">
                {/* <!--food card--> */}
                <div className="food-cards">
                  <div className="img">
                    <img src={imgb} alt="food" />
                  </div>
                  <div className="desc">
                    <h3>
                      Food: <span>Pizza</span>
                    </h3>
                    <h3>
                      Price : <span>UgX 50000</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodMenuComponet;
