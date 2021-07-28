import React from 'react'
import Square from './Square'
import './Grid.css';

export default class Grid extends React.Component {
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
            this.VictoryCondition()
        } else {
            tempArray.splice(id, 1, "bluePlayer")
            this.setState(prevState => {
                return {
                    ...prevState,
                    array: [...tempArray],
                    player: "redPlayer"
                }
            })
            this.VictoryCondition()
        }
    }
    VictoryCondition(){
        if (
            this.state.array[0] === this.state.array[1] === this.state.array[2] === "bluePlayer" ||
            this.state.array[3] === this.state.array[4] === this.state.array[5] === "bluePlayer" ||
            this.state.array[6] === this.state.array[7] === this.state.array[8] === "bluePlayer" ||
            this.state.array[0] === this.state.array[3] === this.state.array[6] === "bluePlayer" ||
            this.state.array[1] === this.state.array[4] === this.state.array[7] === "bluePlayer" ||
            this.state.array[2] === this.state.array[5] === this.state.array[8] === "bluePlayer" ||
            this.state.array[0] === this.state.array[4] === this.state.array[8] === "bluePlayer" ||
            this.state.array[2] === this.state.array[4] === this.state.array[6] === "bluePlayer"
        ) {
            return (
                <div>
                <p>Blue player wins</p>
                </div>
            )
        }
        if (
            this.state.array[0] === this.state.array[1] === this.state.array[2] === "redPlayer" ||
            this.state.array[3] === this.state.array[4] === this.state.array[5] === "redPlayer" ||
            this.state.array[6] === this.state.array[7] === this.state.array[8] === "redPlayer" ||
            this.state.array[0] === this.state.array[3] === this.state.array[6] === "redPlayer" ||
            this.state.array[1] === this.state.array[4] === this.state.array[7] === "redPlayer" ||
            this.state.array[2] === this.state.array[5] === this.state.array[8] === "redPlayer" ||
            this.state.array[0] === this.state.array[4] === this.state.array[8] === "redPlayer" ||
            this.state.array[2] === this.state.array[4] === this.state.array[6] === "redPlayer"
        ) {
            return (
                <div>
                <p>Red player wins</p>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td><Square id={0} value={this.state.array[0]} onClick={this.changeBackgroundColor}>A1</Square></td>
                        <td><Square id={1} value={this.state.array[1]}  onClick={this.changeBackgroundColor}>A2</Square></td>
                        <td><Square id={2} value={this.state.array[2]} onClick={this.changeBackgroundColor}>A3</Square></td>
                    </tr>
                    <tr>
                        <td><Square id={3} value={this.state.array[3]}  onClick={this.changeBackgroundColor} >B1</Square></td>
                        <td><Square id={4} value={this.state.array[4]}  onClick={this.changeBackgroundColor} >B2</Square></td>
                        <td><Square id={5} value={this.state.array[5]}  onClick={this.changeBackgroundColor} >B3</Square></td>
                    </tr>
                    <tr>
                        <td><Square id={6} value={this.state.array[6]}  onClick={this.changeBackgroundColor} >C1</Square></td>
                        <td><Square id={7} value={this.state.array[7]}  onClick={this.changeBackgroundColor} >C2</Square></td>
                        <td><Square id={8} value={this.state.array[8]}  onClick={this.changeBackgroundColor} >C3</Square></td>
                    </tr>
                </table>
            </div>
        )
    }
}