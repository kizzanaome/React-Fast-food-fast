import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './static/css/foodmenu.css';
import './static/css/viewmore.css';
import './static/css/order.css';

import Header from './header';
import img from '../componets/static/images/second_image.jpg';
import imgb from '../componets/static/images/menu1.jpg';

export class FoodMenuComponet extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="wrapper">
          <div class="content">
            {/* <!--menu--> */}
            <div class="side-menu">
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
            <div class="content-wrapper">
              <div class="foods">
                {/* <!--food card--> */}
                <div class="food-cards">
                  <div class="img">
                    <img src={imgb} alt="food" />
                  </div>
                  <div class="desc">
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
