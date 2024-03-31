import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import './Checkout.css'

function Checkout() {
    const [{basket}] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
      <img className='checkout_ad' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Central/New/Launches/Store/Header/1500X3003.jpg' alt=''/>

    { basket?.length === 0 ?(
        <div className='checkout_title'>
            <h2>Your Shoping Basket is Empty</h2>
            <p>you have no items in your Basket. To buy one or more items, click "Add to Basket" next to the item</p>
        </div>
    ):(
        <div className='checkout_title'>
           <h1>Your Shopping Basket</h1> 

           {basket.map(item => (
            <CheckoutProduct 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
            
           ))}
        </div>
    )}
    </div>
    {basket.length > 0 && (
        <div className='checkout_rigth'>
            <h1>Subtotal</h1>
            <Subtotal />
        </div>
    )}
    </div>
  )
}

export default Checkout
