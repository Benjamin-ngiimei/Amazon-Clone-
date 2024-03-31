import React from 'react'
import './order.css';


function Order() {
  return (
    <>
    <div className='your_order'>
    <h2> Your Orders</h2>
    <input type='text' className='search_order' placeholder='Search all your Orders'/>
    <button className='order_button'><b>search orders</b></button>
    </div>
     <div className='order_content'>
     <span><a href=''>Order</a></span>
     <span><a href=''>Buy Again</a></span>
     <span><a href=''>Not Yet Shiped</a></span>
     <span><a href=''>Cancelled Orders</a></span>
      </div> 
      <hr/>
      <p>Looks like you haven't placed an order in the last months.<span className='span'><a href=''>View Orders in 2024</a></span></p>
      </>
  )
}

export default Order
