import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getbaskettotal } from './reducer';

import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  const [{basket},] = useStateValue();
  return (
    <div className='subtotal'>
     <CurrencyFormat 
     renderText={(value)=>(
      <>
      <p>
        Subtotal({basket.length} item): <strong>{`${value}`}</strong>
      </p>
      <small className='subtotal_gift'>
         <input type='checkbox'/> this order contains a gift
      </small>
      </>
     )}
     decimalScale={2}
     value={getbaskettotal(basket)}
     displayType={"text"}
     thousendSeparator={true}
     prefix={"₹"}
     />
      <button>proceed to checkout</button>
    </div>
  )
}
export default Subtotal
