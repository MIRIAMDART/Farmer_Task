import React, { Component } from 'react'

export default class TodoListItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.id + 1}. {this.props.todoListItem}</p>
      </div>
    )
  }
}
