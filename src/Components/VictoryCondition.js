import React from 'react'

export default class VictoryCondition extends React.Component {

    renderVictoryCondition(){
        if (
            this.props.squares[0] === this.props.squares[1] === this.props.squares[2] === "blue" ||
            this.props.squares[3] === this.props.squares[4] === this.props.squares[5] === "blue" ||
            this.props.squares[6] === this.props.squares[7] === this.props.squares[8] === "blue" ||
            this.props.squares[0] === this.props.squares[3] === this.props.squares[6] === "blue" ||
            this.props.squares[1] === this.props.squares[4] === this.props.squares[7] === "blue" ||
            this.props.squares[2] === this.props.squares[5] === this.props.squares[8] === "blue" ||
            this.props.squares[0] === this.props.squares[4] === this.props.squares[8] === "blue" ||
            this.props.squares[2] === this.props.squares[4] === this.props.squares[6] === "blue"
        ) {
            return (
                <div>
                <p>Blue player wins</p>
                </div>
            )
        } else if (
            this.props.squares[0] === this.props.squares[1] === this.props.squares[2] === "red" ||
            this.props.squares[3] === this.props.squares[4] === this.props.squares[5] === "red" ||
            this.props.squares[6] === this.props.squares[7] === this.props.squares[8] === "red" ||
            this.props.squares[0] === this.props.squares[3] === this.props.squares[6] === "red" ||
            this.props.squares[1] === this.props.squares[4] === this.props.squares[7] === "red" ||
            this.props.squares[2] === this.props.squares[5] === this.props.squares[8] === "red" ||
            this.props.squares[0] === this.props.squares[4] === this.props.squares[8] === "red" ||
            this.props.squares[2] === this.props.squares[4] === this.props.squares[6] === "red"
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
                {this.renderVictoryCondition()}
            </div>
        )
    }
}

