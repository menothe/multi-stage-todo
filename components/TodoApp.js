import React, { Component } from 'react';
import { AddTaskLabel } from './AddTaskLabel';
import { TaskCard } from './TaskCard';
import { AddTaskDialogue } from './AddTaskDialogue';
import { Column } from './Column';
import { nextTypeLookup } from '../actions/actions';


// main App Class
export default class TodoApp extends Component {

  state = {
    tasks: [],
    addTaskDialogueVisible: false
  }

  showAddTaskDialogue = () => {
    this.setState(() => ({ addTaskDialogueVisible: true }));
  }

  hideAddTaskDialogue = () => {
    this.setState(() => ({ addTaskDialogueVisible: false }));
  }

  // creates new task based on text entered in <AddTaskDialogue />
  addTaskToState = () => {
    let { tasks } = this.state;
    let newTask = {
      taskName: document.getElementById('newTaskName').value,
      taskDescription: document.getElementById('newTaskDescription').value,
      id: tasks.length + 1,
      state: 'todo'
    };

    tasks[tasks.length] = newTask;
    this.setState(() => ({ tasks, addTaskDialogueVisible: false }));
  }

  // updates state of task based on current state
  progressTask = (tId) => {
    let { tasks } = this.state;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === tId) {
        tasks[i].state = nextTypeLookup[tasks[i].state];
        break;
      }
    }
    this.setState(() => ({ tasks }));
  }

  // seeds state w/ initial app data
  componentDidMount() {
    fetch('https://private-caaa7-versustracker.apiary-mock.com/tasks')
      .then((res) => res.json())
      .then((items) => this.setState(() => ({ tasks: items.tasks })));
  }

  render() {
    let { tasks, addTaskDialogueVisible } = this.state;

    return (
      <div className={'container'}>
        <AddTaskLabel showAddTaskDialogue={this.showAddTaskDialogue}/>
        <AddTaskDialogue visible={addTaskDialogueVisible} addTask={this.addTaskToState} hideDialog={this.hideAddTaskDialogue}/>
        <Column label='todo' tasks={tasks} state={'todo'} progressTask={this.progressTask}/>
        <Column label='in-progress' tasks={tasks} state={'in-progress'} progressTask={this.progressTask}/>
        <Column label='complete' tasks={tasks} state={'complete'} progressTask={this.progressTask}/>
      </div>
    )
  }
}
