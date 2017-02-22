// import Auth0Lock from 'auth0-lock';
// import { browserHistory } from 'react-router';

// export default class AuthService {
//   constructor(clientId, domain) {
//     this.lock = new Auth0Lock(clientId, domain, {
//       auth: {
//         redurectUrl: 'http://localhost:3000/login',
//         responseType: 'token'
//       },
//       allowedConnections: ['twitter']
//     });

//     this.lock.on('authenticated', this._doAuthentication.bind(this));

//     this.login = this.login.bind(this);
//   }

//   _doAuthentication(authResult) {
//     this.setToken(authResult.idToken);
//     browserHistory.replace('/');
//   }

//   login() {
//     this.lock.show();
//   }

//   loggedIn() {
//     return !!this.getToken();
//   }

//   setToken(idToken) {
//     localStorage.setItem('id_token', idToken);
//   }

//   getToken() {
//     return localStorage.getItem('id_token');
//   }

//   logout() {
//     localStorage.removeItem('id_token');
//   }
// }

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth0Lock = require('auth0-lock');

var _auth0Lock2 = _interopRequireDefault(_auth0Lock);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthService = function () {
  function AuthService(clientId, domain) {
    _classCallCheck(this, AuthService);

    this.lock = new _auth0Lock2.default(clientId, domain, {
      auth: {
        redurectUrl: 'http://localhost:3000/login',
        responseType: 'token'
      },
      allowedConnections: ['twitter']
    });

    this.lock.on('authenticated', this._doAuthentication.bind(this));

    this.login = this.login.bind(this);
  }

  _createClass(AuthService, [{
    key: '_doAuthentication',
    value: function _doAuthentication(authResult) {
      this.setToken(authResult.idToken);
      _reactRouter.browserHistory.replace('/');
    }
  }, {
    key: 'login',
    value: function login() {
      this.lock.show();
    }
  }, {
    key: 'loggedIn',
    value: function loggedIn() {
      return !!this.getToken();
    }
  }, {
    key: 'setToken',
    value: function setToken(idToken) {
      localStorage.setItem('id_token', idToken);
    }
  }, {
    key: 'getToken',
    value: function getToken() {
      return localStorage.getItem('id_token');
    }
  }, {
    key: 'logout',
    value: function logout() {
      localStorage.removeItem('id_token');
    }
  }]);

  return AuthService;
}();

exports.default = AuthService;