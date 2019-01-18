import React, { Component } from 'react'
import TodoListItem from './TodoListItem'


export default class TodoList extends Component {
  state={
    entryItem: "", 
    itemList: []
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
    const filteredItems = this.state.itemList.filter((item,index)=> {
      return index !== key
    })
    this.setState({
    items: filteredItems,
    })
  }
  
   
   

  render() {
    return (
      <div className= "Top-Wrapper">
        <form className= "todoform" onSubmit= {this.onFormSubmit}>
        <h3 className="todotitle">Enter Today's Farm Task</h3>
        <input
            type="text"
            className="form-control"
            placeholder="What do you want to achieve on your farm today?"
            value= {this.state.entryItem}
            onChange = {this.onInputChange}/>
        </form>
         
        {this.state.itemList.map((item, index)=>(
          <TodoListItem key={index} id={index} todoListItem={item} deleteItem={this.deleteItem} />
        ))}

      </div>
    )
  }
}
