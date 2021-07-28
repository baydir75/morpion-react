import React from 'react'
import Game from './Game'

class Grid extends React.Component {
  render() {
    const gridStyle = {
        width: '100px',
        height: '100px'
    }

    const squares = [9].fill(null);
    const currentPlayer = 'X';

    const renderSquare = (index) => (
      <div
          role="button"
          tabIndex={0}
          style={gridStyle}
      >
          {squares[index]}
      </div>
  );

    return (
      <>
        <div className="container">
          <div className="row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>

          <div className="row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>

          <div className="row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </>
    )
  }
}

export default Grid;