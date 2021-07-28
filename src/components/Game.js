import React from 'react'
import Button from './Button'
import './Game.css'

class Game extends React.Component {
    constructor() {
        super()
    
        this.state = {
        }

    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td><Button onClick={this.changeCaseStyle}>A1</Button></td>
                        <td><Button onClick={this.changeCaseStyle}>A2</Button></td>
                        <td><Button onClick={this.changeCaseStyle}>A3</Button></td>
                    </tr>
                    <tr>
                        <td><Button onClick={this.changeCaseStyle}>B1</Button></td>
                        <td><Button onClick={this.changeCaseStyle}>B2</Button></td>
                        <td><Button onClick={this.changeCaseStyle}>B3</Button></td>
                    </tr>
                    <tr>
                        <td><Button onClick={this.changeCaseStyle}>C1</Button></td>
                        <td><Button onClick={this.changeCaseStyle}>C2</Button></td>
                        <td><Button onClick={this.changeCaseStyle}>C3</Button></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Game