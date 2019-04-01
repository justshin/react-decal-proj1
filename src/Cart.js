import React from "react";
import ProductData from "./Data";
import "./styles/cart.css";
import Init from "./Product";

class Cart extends React.Component {
  render(){
let itemList = this.props.items.map(items=>{
    return(
<div class="card">
  <div class="content">
    <div class="header">{items.name}</div>
    <div class="description">
      {items.price}
    </div>
  </div>
  <div class="ui bottom attached button">
    <i class="add icon"></i>
    Add Product
  </div>
</div>)
})
return(
  <div className= "contain">
    <h3 className= "center">Items for Sale</h3>
    <div className= "box">
      {itemList}
    </div>
  </div>
)
}}

const map = (state)=>{
  return {
    items: state.items
  }
}

export default Cart;
