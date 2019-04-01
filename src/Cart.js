import React from "react";
import ProductData from "./Data";
import "./styles/cart.css";
import Product from "./Product";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {name: 'Apple', price: '$2', limit: 10},
      {name: 'Bat', price: '$3', limit: 15}
    ];
  }


  render(){
    return(
<div class="ui card">
  <div class="content">
    <div class="header">{this.state.name}</div>
    <div class="description">
  {this.state.price}
    </div>
  </div>
  <div class="ui bottom attached button">
    <i class="add icon"></i>
    Add to Cart
  </div>
</div>)}}

export default Cart;
