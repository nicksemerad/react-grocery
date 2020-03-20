import React, { Component} from 'react';
// import { Button } from 'semantic-ui-react';

const Item = ({ id, name, price}) => (
  <div key={id}>
    <h3>{name}</h3>
    <h3>{price}</h3>
    {/* <button color='olive'>Delete</button>  */}
  </div>
)



export default Item;