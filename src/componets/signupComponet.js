import React, { Component } from 'react';

import './static/css/signup.css';

export class SignupComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="wrapper">
        <div className="frm">
          <form role="form" onSubmit={this.onSubmit}>
            <h2>Please Signup</h2>

            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.onChange}
              required
            />
            <br />

            <label for="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.onChange}
              required
            />
            <br />

            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.onChange}
              minlength="8"
              required
            />

            <button className="btn" name="submit">
              sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupComponet;
