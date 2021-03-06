import React, { Component, component } from 'react';

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            task:this.props.TaskItem.task,
            isEditing: false,
        };
    }
    setEditingState = (isEditing) => {
        this.setState({ isEditing: isEditing });
    }
    deleteTask = () => { 
        this.props.deleteTask(this.props.id);
    }
    handleChange = (event) => {
        this.setState({task: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.probs.editTask(this.props.id, this.state.task);
        this.setState({isEditing: false});
    }
    render() {
        return (
           <tr>
               {this.state.isEditing?
               <>
               <td>
                   <form onsubmit={this.handleSubmit}>
                       <input value={this.state.task}
                       onChange={this.handleChange}
                       autoFocus />
                   </form>
               </td>
               <td>
                   <button type='submit'>Save</button>
                   <button onClick={()=>this.setEditingState(false)} type='button'>Back</button>
               </td>
            </>
            :
            <>
             <td>
                {this.props.TaskItem.task}
             </td>
             <td>
                 <button onClick={() => this.setEditingState(true)}>Edit</button>
                 <button onClick={this.deleteTask}>Delete</button>
             </td>
            </>
            }
           </tr>
        )
    }
}