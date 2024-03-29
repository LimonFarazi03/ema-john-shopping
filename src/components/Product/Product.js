import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
  // console.log(props.product)
  // const {handleAddToCard} = props
  const {name,img,seller,price,ratings} = props.product
  // const {handleAddToCard} = props
  return (
    <div className="product">
      <img src={img} alt=""/>
      <div className='product-details'>
        <p className='product-name'>{name}</p>
        <p>Price: {price}</p>
        <p><small>Seller: {seller}</small></p>
        <p><small>Rating: {ratings}stars</small></p>
      </div>
      <button onClick={ ()=> props.handleAddToCard(props.product)} className='btn-cart'>
          <p>Add to Card</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
    </div>
  );
};

export default Product;