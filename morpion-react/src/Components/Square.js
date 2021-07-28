import React from 'react'

class Square extends React.Component {
   
    render() {
        return (
            <div>
                <button onClick={props.onClick}>
                    {props.vaule}
                </button>
            </div>
        )
    }

}

export default Square;