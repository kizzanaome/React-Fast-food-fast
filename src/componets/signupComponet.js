import React, { Component } from 'react';
import './static/css/signup.css';
import PropTypes from 'prop-types';

export class SignupComponet extends Component {
  render() {
    const { onChange, onClick, message, error } = this.props;

    return (
      <div className="wrapper">
        <div className="frm">
          <form role="form">
            {error && <div className="alert alert-danger">{error}</div>}
            <div>{message}</div>
            <h2>Please Signup</h2>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              // value={this.state.username}
              onChange={onChange}
              required={true}
            />
            {/* {errors.username && <p>{errors.username}</p>} */}

            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              // value={this.state.password}
              onChange={onChange}
              minLength="8"
              required={true}
            />

            <button
              className="btn"
              name="submit"
              type="button"
              onClick={onClick}
            >
              sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}
SignupComponet.propTypes = {
  registerUser: PropTypes.func.isRequired
};
export default SignupComponet;
