/*import React from 'react'

export default class VictoryCondition extends React.Component {

    renderVictoryCondition(){
        if (
            this.props.squares[0] === this.props.squares[1] === this.props.squares[2] === "bluePlayer" ||
            this.props.squares[3] === this.props.squares[4] === this.props.squares[5] === "bluePlayer" ||
            this.props.squares[6] === this.props.squares[7] === this.props.squares[8] === "bluePlayer" ||
            this.props.squares[0] === this.props.squares[3] === this.props.squares[6] === "bluePlayer" ||
            this.props.squares[1] === this.props.squares[4] === this.props.squares[7] === "bluePlayer" ||
            this.props.squares[2] === this.props.squares[5] === this.props.squares[8] === "bluePlayer" ||
            this.props.squares[0] === this.props.squares[4] === this.props.squares[8] === "bluePlayer" ||
            this.props.squares[2] === this.props.squares[4] === this.props.squares[6] === "bluePlayer"
        ) {
            return (
                <div>
                <p>Blue player wins</p>
                </div>
            )
        } else if (
            this.props.squares[0] === this.props.squares[1] === this.props.squares[2] === "redPlayer" ||
            this.props.squares[3] === this.props.squares[4] === this.props.squares[5] === "redPlayer" ||
            this.props.squares[6] === this.props.squares[7] === this.props.squares[8] === "redPlayer" ||
            this.props.squares[0] === this.props.squares[3] === this.props.squares[6] === "redPlayer" ||
            this.props.squares[1] === this.props.squares[4] === this.props.squares[7] === "redPlayer" ||
            this.props.squares[2] === this.props.squares[5] === this.props.squares[8] === "redPlayer" ||
            this.props.squares[0] === this.props.squares[4] === this.props.squares[8] === "redPlayer" ||
            this.props.squares[2] === this.props.squares[4] === this.props.squares[6] === "redPlayer"
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
*/
