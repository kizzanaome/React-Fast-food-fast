import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class LoginComponet extends Component {
  render() {
    const { onChange, onClick, fail, message, error } = this.props;
    return (
      <div>
        <div className="wrapper">
          <div className="frm">
            <form role="form">
              {error && <div className="alert alert-danger">{error}</div>}
              {message && <div className="alert alert-danger">{message}</div>}
              <h2>Please login</h2>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={onChange}
                required={true}
              />

              <br />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={onChange}
                minLength="8"
                required
              />

              <button
                className="btn"
                name="submit"
                id="login-Button"
                type="button"
                onClick={onClick}
              >
                Login
              </button>
              <Link to={`/signup`} href={`/signup`}>
                Dont have an account SIGNUP
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponet;
