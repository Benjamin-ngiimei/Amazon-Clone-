import React from 'react'
import './Beauty.css';

function Beauty() {
  return (
    <div className='Sub_beauty'>
      {/* <h2>Beauty</h2> */}
      <a href='./Skincare' > <div className='Beauty'>
        <h2>Skincare</h2> 
         <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/Revamp/Halos/skin._SS300_QL85_FMpng_.png'alt=''></img> 
        </div></a>
        <a href='./Haircare' > <div className='Beauty'>
        <h2>Haircare</h2> 
         <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/Revamp/Halos/hair1._SS300_QL85_FMpng_.png'alt=''></img> 
        </div></a>
        <a href='./Makeup' > <div className='Beauty'>
        <h2>Makeup</h2> 
         <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/Revamp/Halos/makeup._SS300_QL85_FMpng_.png'alt=''></img> 
        </div></a>

        <div className='electronic_banner'>
        <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/Revamp/PC/headers/nails._SX3000_QL85_FMpng_.png' alt=''/><br></br>
        <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/Revamp/PC/headers/GBS._SX3000_QL85_FMpng_.png' alt=''/>
        </div>

    </div>
  )
}

export default Beauty
