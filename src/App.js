import React, { Component } from 'react';
import ItemList from './Components/ItemList'
// import { Button } from 'semantic-ui-react';

class App extends Component {
  state = { items: [
    {id : 1, name: 'Toilet Paper', price: '$15'},
    {id : 2, name: 'Hand Sanitizer', price: '$7'},
    {id : 3, name: 'Clorox Wipes', price: '$9'},
    {id : 4, name: 'Corona Extra', price: '$18'},
  ],
  showForm: false
}

  render() {
    const { items } = this.state
    return(
      <div>
        <h1>Nick's Store</h1>
        <ItemList items={items}/>
      </div>
    )
  }





}

export default App;
