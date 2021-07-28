import React from 'react'
import Square from './Square'
import './Game.css'

class Game extends React.Component {
    constructor() {
        super()

        this.state = {
            player: "redPlayer",
            array: ["", "", "", "", "", "", "", "", ""]
        }
        this.changeBackgroundColor = this.changeBackgroundColor.bind(this)
    }

    changeBackgroundColor(id) {
        console.log(id)
        console.log(this.state.player)
        console.log(this.state.array)
        let tempArray = [...this.state.array]

        if (this.state.player === "redPlayer") {
            tempArray.splice(id, 1, "redPlayer")
            this.setState(prevState => {
                return {
                    ...prevState,
                    array: [...tempArray],
                    player: "bluePlayer"
                }
            })
        } else {
            tempArray.splice(id, 1, "bluePlayer")
            this.setState(prevState => {
                return {
                    ...prevState,
                    array: [...tempArray],
                    player: "redPlayer"
                }
            })
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td><Square id={0} value={this.state.array[0]} onClick={this.changeBackgroundColor} style={this.state.style}>A1</Square></td>
                        <td><Square id={1} value={this.state.array[1]}  onClick={this.changeBackgroundColor} style={this.state.style}>A2</Square></td>
                        <td><Square id={2} value={this.state.array[2]} onClick={this.changeBackgroundColor} style={this.state.style}>A3</Square></td>
                    </tr>
                    <tr>
                        <td><Square id={3} value={this.state.array[3]}  onClick={this.changeBackgroundColor} style={this.state.style}>B1</Square></td>
                        <td><Square id={4} value={this.state.array[4]}  onClick={this.changeBackgroundColor} style={this.state.style}>B2</Square></td>
                        <td><Square id={5} value={this.state.array[5]}  onClick={this.changeBackgroundColor} style={this.state.style}>B3</Square></td>
                    </tr>
                    <tr>
                        <td><Square id={6} value={this.state.array[6]}  onClick={this.changeBackgroundColor} style={this.state.style}>C1</Square></td>
                        <td><Square id={7} value={this.state.array[7]}  onClick={this.changeBackgroundColor} style={this.state.style}>C2</Square></td>
                        <td><Square id={8} value={this.state.array[8]}  onClick={this.changeBackgroundColor} style={this.state.style}>C3</Square></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Game