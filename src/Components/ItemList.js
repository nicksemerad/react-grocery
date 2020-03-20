import React from 'react';
import Item from './Item';

const ItemList = ({ items, deleteItem }) => (
  items.map( item => <Item 
    key={item.id} {...item}
    deleteItem={deleteItem}
    />)

)


export default ItemList;