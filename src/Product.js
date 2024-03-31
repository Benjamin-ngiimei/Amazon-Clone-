import React from 'react'; 
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // Dispatch action to add item to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    });
  };

  return (
    <div className='Product'>
      <div className='Product_info'>
        <p>{title}</p>
        <p className='Product_price'>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className='Product_rating'>
          {Array(5).fill().map((_, index) => (
            <p key={index}>⭐️</p>
          ))}
        </div>
      </div>
      <img src={image} alt=""/>
      <button className='button' onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
