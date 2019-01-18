import React, { Component } from 'react'

export default class TodoListItem extends Component {

   
  render() {
    return (
      <div>
      <p className="prop">{this.props.id + 1}. {this.props.todoListItem}.{this.props.deleteItem}  </p>
      </div>
    )
  }
}
