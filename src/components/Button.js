import React from 'react'
import './Button.css'

class Button extends React.Component {
    constructor() {
        super()
    
        this.state = {
            style: "",
            player: "player 2"
        }

        this.changeCaseStyle = this.changeCaseStyle.bind(this)
    }

    changeCaseStyle() {
        console.log(this.state.player)
        if (this.state.player === "player 1") {
            this.setState(prevState => {
                return {
                    ...prevState,
                    style: "player1",
                    player: "player 2"
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    ...prevState,
                    style: "player2",
                    player: "player 1"
                }
            })
        }
    }


    render() {
        return (
            <div>
                <button className={this.state.style} onClick={this.changeCaseStyle}>Test</button>
            </div>
        )
    }
    
}

export default Button