import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import '../styles/project/components/profile.css'

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
        <input className="game shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={this.state.nickValue} onChange={this.handleChangeNick}/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={this.newGame}>Начать игру</button>
      </div>
    );
  }
}

export default Profile;