import React, { Component} from 'react';
import { Button } from 'semantic-ui-react';

const Item = ({ id, name, price}) => (
  <div key={id}>
    <h3>{name} -- {price}</h3>
    {/* <Button color='red'>Delete</Button>  */}
  </div>
)



export default Item;