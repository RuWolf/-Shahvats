import React, {Component} from 'react';
import '../styles/login.css'
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
      <div className="login-container">
        <div className="login-nick">
          <div className="login-text">Nick:</div>
          <input className="login-input" type="text" value={this.state.nickValue} onChange={this.handleChangeNick}/>
        </div>
        <div className="login-pass">
          <div className="login-text">Pass:</div>
          <input className="pass-input" value={this.state.passValue} onChange={this.handleChangePass}/>
        </div>
        <button onClick={this.sendData}>Войти</button>
      </div>
    );
  }
}

export default Login;