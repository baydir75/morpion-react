import React from 'react'
import './Square.css'

export default class Square extends React.Component {
    constructor() {
        super()
    
        this.state = {
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({style: this.props.value})
    }

    render() {
        return (
            <div>
                <button disabled={this.props.value ? true : false} id={this.props.id} className={this.props.value} onClick={(e) => this.props.onClick(e.target.id)}>{this.props.children}</button>
            </div>
        )
    }
    
}