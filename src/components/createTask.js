import React, { Component } from 'react';

export default class CreateTask extends Component {
    constructor(probs) {
        super(probs);
        this.state = {
           task: '', 
        };
    }
    handleChange = (event) => {
        this.setState({task: event.target.value});
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.CreateTask(this.state.task);
        this.setState({ task: ''});
    }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
             <input type="text"
            placeholder="Enter task"
            value={this.state.task} 
            onChange={this.handleChange} 
            autoFocus
            />
             <button type='submit'>Add</button>
           </form>
        )
    }
}