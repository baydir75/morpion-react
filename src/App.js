import React from 'react'
import VictoryCondition from './Components/VictoryCondition';
import Grid from './Components/Grid';
import PlayerSwitch from './Components/PlayerSwitch'
import './App.css';

let squares = [
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white"
]

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      player: "blue",
    }
  }
  changeToBlue=(num)=> {
    squares[num] = "blue"
  }
  changeToRed=(num)=> {
    squares[num] = "red"
  }
  changePlayer=()=> {
    if (this.state.player === "blue") {
      this.setState((prevState) => {
        return {
          ...prevState,
          player: "red"
        };
      });
  }
  if (this.state.player === "red") {
      this.setState((prevState) => {
        return {
          ...prevState,
          player: "blue"
        };
      });
  }
  console.log(this.state.player)
  }
  render(){
    return (
      <div>
        <Grid />
        <PlayerSwitch player={this.state.player} changePlayer={this.changePlayer}/>
        <VictoryCondition squares={squares} />
      </div>
    )
  }
}
