import React, { Component } from 'react'

export default class TodoList extends Component {
  state={
    entryItem: ""
  }

  onInputChange = (event) => {
    this.setState({entryItem: event.target.value})
  }

  render() {
    return (
      <div>
        <input
            type="text"
            className="form-control"
            placeholder="Enter a Task"
            value= {this.state.entryItem}
            onChange = {this.onInputChange}/>
      </div>
    )
  }
}
