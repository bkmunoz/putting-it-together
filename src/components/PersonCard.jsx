import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            older: this.props.age
        }
    }
    render(){
        return(
        <div>
            <h1>{this.props.lastName}, {this.props.firstName} </h1>
            <h3>Age: {this.state.older} </h3>
            <h3>Hair Color: {this.props.hairColor} </h3>
            <button onClick={() => 
                this.setState({
                    older: 
                    this.state.older + 1
            })}>
                Birthday button for {this.props.firstName}
            </button>
        </div>
        )
    }
}

export default PersonCard;