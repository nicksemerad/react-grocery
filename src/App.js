import React, { Component } from 'react';
import ItemList from './Components/ItemList'
import ItemForm from './Components/ItemForm'
import { Button, Icon } from 'semantic-ui-react';

class App extends Component {
  state = { items: [
    {id : 1, name: 'Toilet Paper', price: '15'},
    {id : 2, name: 'Hand Sanitizer', price: '7'},
    {id : 3, name: 'Clorox Wipes', price: '9'},
    {id : 4, name: 'Corona Extra', price: '18'},
  ],
  showForm: false
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addItem = (incomingItem) => {
    let newItem = { id: this.getId(), ...incomingItem }
    this.setState({ items: [newItem, ...this.state.items]})
  }

  deleteItem = (id) => {
    const items = this.state.items.filter( item => {
      if (item.id !== id ) {
        return item 
      }
    })
    this.setState({ items })
  }

  render() {
    const { items, showForm } = this.state
    return(
      <div>
        <h1>Nick's Store</h1>
        <ItemList items={items} deleteItem={this.deleteItem}/>

        <Button onClick={this.toggleForm}>
          {showForm ? 'Hide Item Form' : 'Show Item Form'}
        </Button>
        {
          showForm ? <ItemForm items={items} addItem={this.addItem}/> : null
        }
      </div>
    )
  }
}

export default App;
