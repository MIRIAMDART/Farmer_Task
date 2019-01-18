import React, { Component } from 'react'
import TodoListItem from './TodoListItem'
  

export default class TodoList extends Component {
  state={
    entryItem: "", 
    itemList: []
    deleteItem: 
  }


  onFormSubmit = (event) => {
    event.preventDefault()
     
    let itemList = this.state.itemList
    itemList.push(this.state.entryItem)
    this.setState({itemList, entryItem: ''})
  }

  onInputChange = (event) => {
    this.setState({entryItem: event.target.value})
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }


  render() {
    return (
      <div className= "Top-Wrapper">
        <form className= "todoform" onSubmit= {this.onFormSubmit}>
        <input
            type="text"
            className="form-control"
            placeholder="Enter a task"
            value= {this.state.entryItem}
            onChange = {this.onInputChange}/>
        </form>
          <h3 className="todotitle">Farm Tasks </h3> 
        {this.state.itemList.map((item, index)=>(
          <TodoListItem key={index} id={index} todoListItem={item} />
        ))}
      </div>
    )
  }
}
