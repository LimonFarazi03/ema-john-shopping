import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect( () =>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[]);
  const handleAddToCard = product =>{
    // console.log(product);
    setCart([...cart,product])
  }
  return (
    <div className='shop-container'>
      <div className="product-container">
        {
          products.map(product => <Product key={product.id} 
                                           product={product}
                                           handleAddToCard={handleAddToCard}
                                           >
                                  </Product> )
        }
      </div>
      <div className="card-container">
      <h1>Order Summary</h1>
      <p>Selacted items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;