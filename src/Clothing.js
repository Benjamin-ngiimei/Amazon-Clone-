import React from 'react'
import'./Clothing.css';

function Clothing() {
  return (
    <div className='Sub_clothing'>
      {/* <h2>Clothing</h2> */}
      <a href='./Man' > <div className='men'>
        <h2>Men</h2> 
         <img src='https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Halo/main/V1/mens._SS300_QL85_FMpng_.png'alt=''></img> 
        </div></a>
        <a href='./Women' > <div className='women'>
        <h2>Women</h2> 
         <img src='https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/Halo/main/V1/womens._SS300_QL85_FMpng_.png'alt=''></img> 
        </div></a>
        <a href='./Kids' > <div className='kids'>
        <h2>Kids</h2> 
         <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/mainHalos/Highlighted/Winterwear._SS300_QL85_FMpng_.png'alt=''></img> 
        </div></a>

        <div className='electronic_banner'>
        <img src='https://m.media-amazon.com/images/G/31/img23/WA/2024/feb/SS/Top-Ingress-pc._SX3000_QL85_.jpg' alt=''/><br></br>
        <img src='https://m.media-amazon.com/images/G/31/img24/Fashion/AF/SS24/Flip/TopHero/PC/cml-pc._CB580671423_.jpg' alt=''/>
        </div>

    </div>
  )
}

export default Clothing
