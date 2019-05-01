import React, { Component } from "react";
import Alert from "./helpers";

class TodoList extends Component {
  render() {
    const list = this.props.List.length ? (
      this.props.List.map((task, index) => (
        <li className="list-group-item" key={index}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked={task.done}
              onChange={event => this.props.OnChange(event, index)}
              id={`checkbox-${index}`}
            />
            <label className="form-check-label" htmlFor={`checkbox-${index}`}>
              {task.done ? <del>{task.title}</del> : <span>{task.title}</span>}
            </label>
            <button
              type="button"
              className="close"
              onClick={() => this.props.OnDelete(index)}
            >
              <span aria-label="delete" role="img">🗑️</span>
            </button>
            <button
              type="button"
              className="close"
              onClick={() => this.props.OnCopy(index)}
            >
              <span aria-label="duplicate" role="img">⚡</span>
            </button>
          </div>
        </li>
      ))
    ) : (
      <Alert type="secondary" message="There is no task to do —check it out!" />
    );

    return (
      <div>
        <h1 className="mt-5">To-Do List</h1>
        <div className="panel">
          <ul className="list-group">
            {list}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
