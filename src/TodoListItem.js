import React, { Component } from 'react'


export default class TodoListItem extends Component {
   
  render() {

    return (
      <div>
       <p className="prop"> <button className="button" onClick={() =>
         this.props.deleteItem(TodoListItem.key)} >Task Completed </button>
         {this.props.id + 1}. {this.props.todoListItem}
       </p>
      </div>
      
    )
  }
}

