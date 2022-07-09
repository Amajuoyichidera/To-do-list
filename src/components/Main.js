import React from 'react';
import CreateTask from './createTask';
import TaskList from './Task list';

const tasks = [];
export default class Main extends React.Component {
  constructor(probs) {
      super(probs);
      this.state = {
          tasks: tasks,
      };
  }
  createTask = (task) => {
     if(task.trim() === '') {
         alert('Task can\'t be empty');
         return;
     }
     tasks.push({task, isCompleted: false});
     this.setState({tasks: tasks});
  };
  deleteTask = (taskid) => {
      tasks.splice(taskid, 1);
      this.setState({tasks: tasks});
  }
  editTask = (taskid, task) => {
      const TaskItem = tasks(taskid);
      TaskItem.task = task;
      this.setState({task: tasks});
  };
  render() {
      return (
          <div>
              <h1>Todos</h1>
              <div>
                  <CreateTask CreateTask={this.createTask} />
                  <br/>
                  <TaskList 
                  tasks={this.state.tasks}
                  deleteTask={this.deleteTask} 
                  editTask={this.editTask} 
                  />
              </div>
          </div>
      )
  }
}