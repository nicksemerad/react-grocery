import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => (
  items.map( item => <Item 
    key={item.id} {...item}
    />)

)


export default ItemList;