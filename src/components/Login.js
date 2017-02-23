import React, { Component, PropTypes as T } from 'react';
import AuthService from '../../build/AuthService';

export default class Login extends Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props;
    return (
      <div className="text-center">
        <h2>Login</h2>
        { auth.login() }
      </div>
    );
  }
}