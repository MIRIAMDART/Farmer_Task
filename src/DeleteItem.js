import React, { Component } from 'react'







export default class deleteItem extends Component {
  render() {
    return (
        <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
          {item.text}
        </li>
    )
  }
}
