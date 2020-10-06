import React, { Component } from 'react'

class Welcome extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
            title: "khayrul"
        }
        this.ButtonClick = this.ButtonClick.bind(this);
    }
    
    ButtonClick(){
        this.setState(
            {
                title: "Labib"
            }
        )
    }
    
    render() {
        return (
            <div>
                <h1>Hello { this.props.name }</h1>
                <h1>Hello { this.state.title }</h1>
                <button onClick={this.ButtonClick}>Button</button>
            </div>
        )
    }
}

export default Welcome

