import React from 'react'
import Grid from './Components/Grid';
import './App.css';



export default class App extends React.Component {
  constructor () {
    super();
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <Grid player={this.state.player} />
      </div>
    )
  }
}
