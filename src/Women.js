import React from 'react'
import Product from "./Product";
function Women() {
  return (
    <div className=''>
     
     <img className='camera_banner' src='https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Flip/Springsummerflip/CMLheros/PC/1._CB580691776_.jpg'alt=''></img> 

<h2>TOP BRAND OFFERS</h2>

<div className='phone_item'>
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/WF/BAU/TopBrands1/Apparel_5._SX564_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/WF/BAU/TopBrands1/Apparel_4._SX564_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/WF/BAU/TopBrands1/Shoes_1._SX564_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/WF/BAU/TopBrands1/Beauty_8._SX564_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/WF/BAU/TopBrands1/Luggage_3._SX564_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/WF/BAU/TopBrands1/Apparel_0._SX564_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/WF/BAU/TopBrands1/Luggage_7._SX564_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/WF/BAU/TopBrands1/Watches_6._SX564_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/WF/BAU/TopBrands1/Shoes_9._SX564_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/WF/BAU/TopBrands1/Apparel_11._SX564_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/WF/BAU/TopBrands1/Apparel_10._SX564_QL85_FMpng_.png'alt=''></img> 
  
  </div>

      <div className="home_row">
        <Product
          id="123456"
          title="IUGA Women's Printed Knee Length Sleeveless Shrug"
          price={499}
          image="https://m.media-amazon.com/images/I/61c2yRLkElL._SY879_.jpg"
        />
        <Product
          id="123456"
          title="global desi Women's Tunic Shirt"
          price={625}
          image="https://m.media-amazon.com/images/I/81mJZm5QrtS._SY879_.jpg"
        />
        <Product
          id="123456"
          title="W for Woman Blue Floral Printed Straight Kurta"
          price={855}
          image="https://m.media-amazon.com/images/I/51HCepYqB9L._SX679_.jpg"
        />
        <Product
          id="123456"
          title="Divena Pink Cotton Straight Kurta Pant Set with Dupatta"
          price={2599}
          image="https://m.media-amazon.com/images/I/51hkHCyY+WL._SX679_.jpg"
        />
      </div>

    </div>
  )
}

export default Women
