import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label htmlFor="new-task-title">
          Please enter your task then press <code>Enter</code> or{" "}
          <code>Add</code> button
        </label>
        <div className="input-group mb-3">
          <input
            id="new-task-title"
            required
            className="form-control"
            placeholder="Task title"
            onChange={this.props.onChange}
            value={this.props.Model}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
