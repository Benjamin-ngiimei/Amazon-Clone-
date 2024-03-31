import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

console.log(id, title, image, price, rating)

    const removefrombasket=()=>{
     //remove item from basket
     dispatch({
       type: "REMOVE_FROM_BASKET",
       id: id,
     });
    }
  return (
    <div className='checkoutproduct'>
      <img className='Checkoutproduct_image' src={image} alt=''/>
      <div className='checkoutproduct_info'>
        <p className='checkoutproduct_title'>{title}</p>

        <p className='checkoutproduct_price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className='Product_rating'>
          {Array(5).fill().map((_, index) => (
            <p key={index}>⭐️</p>
          ))}
        </div>
        <button onClick={removefrombasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
