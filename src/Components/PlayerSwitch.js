import React from 'react';
import './PlayerSwitch.css';

export default class PlayerSwitch extends React.Component {
    playerSwitch =()=> {
        this.props.changePlayer()
    }
    render(){
      return (
        <div>
            <button onClick={this.playerSwitch} >Switch player</button>
            <p>Current player : {this.props.player}</p>
        </div>
      )
    }
  }