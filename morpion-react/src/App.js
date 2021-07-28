import './App.css';
import React from 'react'
import Grid from './Components/Grid';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1>Morpion - React</h1>
        </div>

        <Grid />
      </div>
    )
  }
}

export default App;
