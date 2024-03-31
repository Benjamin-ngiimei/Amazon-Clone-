import React from 'react'
import Product from "./Product";

function Makeup() {
  return (
    <div>
     
     <img className='camera_banner' src='https://m.media-amazon.com/images/G/31/img24/Beauty/makeup/PC/acs/5._CB561027203_.jpg'alt=''></img> 

<h2>BRANDS SPOTLIGHT</h2>

<div className='phone_item'>
   <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/revamp/makeup/spotlight/Maybelline._SS800_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/revamp/makeup/spotlight/Lakme._SS800_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/revamp/makeup/spotlight/Renne._SS800_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/revamp/makeup/spotlight/Swiss_Beauty._SS800_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/revamp/makeup/spotlight/Sugar._SS800_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/revamp/makeup/spotlight/Colorbar._SS800_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/revamp/makeup/spotlight/Faces_C._SS800_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/revamp/makeup/lux/revised/LOreal_Paris._SS800_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/revamp/makeup/lux/revised/Makeup_Revolution._SS800_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/revamp/makeup/lux/revised/Typsy_Beauty._SS800_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/revamp/makeup/lux/revised/charmacy_milano._SS800_QL85_.jpg'alt=''></img> 
  
  </div>

      <div className="home_row">
        <Product
          id="123456"
          title="MAC Studio Fix Powder Plus Foundation (NC-25)"
          price={2950}
          image="https://m.media-amazon.com/images/I/417OeRNKcoL.jpg"
        />
        <Product
          id="123456"
          title="LAKMÉ 9 To 5 Cc Cream Mini, 01 - Beige, Light Face Makeup With Natural Coverage, Spf 30 - Tinted Moisturizer To Brighten Skin, Conceal Dark Spots, 9 G"
          price={99}
          image="https://m.media-amazon.com/images/I/611o+tHBpFL._SX679_.jpg"
        />
        <Product
          id="123456"
          title="FACES CANADA Weightless Stay Matte Finish Compact Powder - Natural, 9 g | Non Oily Matte Look | Evens Out Complexion | Hides Imperfections | Blends Effortlessly | Pressed Powder For All Skin Types"
          price={123}
          image="https://m.media-amazon.com/images/I/41KZDITNQnL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Beauty Professional Makeup Brush Set - 12 Pcs Face Makeup Brushes Makeup Brush Set (Blue)
          "
          price={259}
          image="https://m.media-amazon.com/images/I/410uS+7bZML.jpg"
        />
      </div>

    </div>
  )
}

export default Makeup
