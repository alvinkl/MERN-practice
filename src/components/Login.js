import React, { Component, PropTypes as T } from 'react';
import AuthService from '../../config/AuthService';

class Login extends Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props;
    return (
      <div>
        <h2>Login</h2>
        <button className="btn btn-primary" onClick={ auth.login.bind(this) }>Login</button>
      </div>
    );
  }
}

export default Login;