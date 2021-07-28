/*
import React from 'react';
import './Grid.css';

export default class Grid extends React.Component {
  constructor () {
    super();
    this.state = {
      style: "white",
    }
  }
  changeColor=()=> {
    if (this.props.player === "blue") {
      this.setState((prevState) => {
        return {
          ...prevState,
          style: "blue"
        };
      });
    }
    if (this.props.player === "red") {
      this.setState((prevState) => {
        return {
          ...prevState,
          style: "red"
        };
      });
    }
  }
  render(){
    return (
      <div>
        <div>
          <button className={this.state.style} onClick={this.changeColor} ></button>
          <button className={this.state.style} onClick={this.changeColor} ></button>
          <button className={this.state.style} onClick={this.changeColor} ></button>
        </div>
        <div>
          <button className={this.state.style} onClick={this.changeColor} ></button>
          <button className={this.state.style} onClick={this.changeColor} ></button>
          <button className={this.state.style} onClick={this.changeColor} ></button>
        </div>
        <div>
          <button className={this.state.style} onClick={this.changeColor} ></button>
          <button className={this.state.style} onClick={this.changeColor} ></button>
          <button className={this.state.style} onClick={this.changeColor} ></button>
        </div>
      </div>
    )
  }
}
*/