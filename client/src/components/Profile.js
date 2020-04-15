import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickValue: ''
    }
  }

  handleChangeNick = (event) => {
    this.setState({nickValue: event.target.value});
  };

  newGame = async () => {
    let nickYour = localStorage.getItem('nick');
    if (!nickYour){
      return <Redirect to={'/login'}/>
    }

    const response = await fetch('/api/newGame', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        nickYour: nickYour,
        nickPartner: this.state.nickValue
      })
    });
    const result = await response.json();
    this.setState({isLogin: result.login})
  };

  render() {
    return (
      <div>
        <input className="login-input" type="text" value={this.state.nickValue} onChange={this.handleChangeNick}/>
        <button onClick={this.newGame}>Начать игру</button>
      </div>
    );
  }
}

export default Profile;