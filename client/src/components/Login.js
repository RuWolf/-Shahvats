import React, {Component} from 'react';
import '../styles/project/components/login.css'
import {Redirect} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickValue: '',
      passValue: '',
      isLogin: false
    }
  }

  handleChangeNick = (event) => {
    this.setState({nickValue: event.target.value});
  };

  handleChangePass = (event) => {
    this.setState({passValue: event.target.value});
  };

  sendData = async () => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        nick: this.state.nickValue,
        password: this.state.passValue
      })
    });
    const result = await response.json();
    this.setState({isLogin: result.login});
    localStorage.setItem('nick', this.state.nickValue)
  };

  render() {
    if (this.state.isLogin) {
      return <Redirect to={'/profile'}/>
    }
    return (
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Username"
              onChange={this.handleChangeNick}/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="******************"
              onChange={this.handleChangePass}/>
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={this.sendData}>
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 RuWolf. All rights reserved.
        </p>
      </div>
    );
  }
}

export default Login;