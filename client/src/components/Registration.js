import React, {Component} from 'react';
import '../styles/login.css'

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickValue: '',
      passValue: ''
    }
  }

  handleChangeNick = (event) => {
    this.setState({nickValue: event.target.value});
  };

  handleChangePass = (event) => {
    this.setState({passValue: event.target.value});
  };

  sendData = async () => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nick: this.state.nickValue,
        password: this.state.passValue
      })
    });
    const result = await response.json();
    console.log(result)
  };

  render() {
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

export default Registration;