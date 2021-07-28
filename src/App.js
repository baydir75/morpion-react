import React from 'react'
import Grid from './Components/Grid'

class App extends React.Component {
  constructor() {
    super()
  
    this.state = {
       player: "player 1"
    }

    this.turn = this.turn.bind(this)
  }

  turn() {
    this.setState(prevState => {
      return {
        ...prevState,
        player: "player 2"
      }
    })
  }

  render() {
    return (
      <div>
        <Grid/>
      </div>
    )
  }
  
}

export default App