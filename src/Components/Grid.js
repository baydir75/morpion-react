import React from 'react';
import './Grid.css';

export default class Grid extends React.Component {
    
    render(){
      return (
        <div>
            <div>
                <button className="square"></button>
                <button className="square"></button>
                <button className="square"></button>
            </div>
            <div>
                <button className="square"></button>
                <button className="square"></button>
                <button className="square"></button>
            </div>
            <div>
                <button className="square"></button>
                <button className="square"></button>
                <button className="square"></button>
            </div>
        </div>
      )
    }
  }