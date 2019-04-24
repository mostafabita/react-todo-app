import React, { Component } from "react";
import Form from "./form";
import TodoList from "./list";

class App extends Component {
  constructor(props) {
    super(props);
    this.storageKey = "taskList";
    this.state = {
      newTask: "",
      taskList: this.getStorageData()
    };
  }

  /**
   * Get data from local storage
   */
  getStorageData = () => {
    let saveTaskList = localStorage.getItem(this.storageKey);
    saveTaskList = saveTaskList ? JSON.parse(saveTaskList) : [];
    return saveTaskList;
  };

  /**
   * Save data to local storage
   */
  updateStorageData = () => {
    localStorage.setItem(this.storageKey, JSON.stringify(this.state.taskList));
  };

  /**
   * Handle changes on new task input
   */
  taskTitleChange = event => {
    this.setState({ newTask: event.target.value });
  };

  /**
   * Handle task status checkbox
   */
  taskStatusChange = (event, index) => {
    const newTaskList = this.state.taskList;
    newTaskList[index].done = event.target.checked;
    this.setState({
      taskList: newTaskList
    });
  };

  /**
   * Delete task from list
   */
  deleteTask = index => {
    this.state.taskList.splice(index, 1);
    this.setState({
      taskList: this.state.taskList
    });
  };

  /**
   * Add new task to list
   */
  addTask = event => {
    event.preventDefault();
    const newTaskList = [
      ...this.state.taskList,
      {
        title: this.state.newTask,
        done: false
      }
    ];
    this.setState({
      taskList: newTaskList,
      newTask: ""
    });
  };

  render() {
    this.updateStorageData();

    return (
      <div>
        <Form
          onSubmit={this.addTask}
          onChange={this.taskTitleChange}
          Model={this.state.newTask}
        />
        <TodoList List={this.state.taskList} OnChange={this.taskStatusChange} OnDelete={this.deleteTask} />
      </div>
    );
  }
}

export default App;
