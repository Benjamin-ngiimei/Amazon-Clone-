import React from 'react'
import Product from "./Product";

function Haircare() {
  return (
    <div>
     
     <img className='camera_banner' src='https://m.media-amazon.com/images/G/31/img23/Beauty/WinterFlip/Subcat/Haircare._CB574275994_.png'alt=''></img> 

<h2>Professional salon brands</h2>

<div className='phone_item'>
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Haircare/Brands/Brand-Tile-Hex-card_01._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Haircare/Brands/Brand-Tile-Hex-card_02._CB648082529_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Haircare/Brands/Brand-Tile-Hex-card_03._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Haircare/Brands/Brand-Tile-Hex-card_04._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Haircare/Brands/Brand-Tile-Hex-card_05._CB648082529_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Haircare/Brands/Brand-Tile-Hex-card_06._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Haircare/Hex-card_01._CB648260906_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Haircare/Hex-card_02._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img22/Beauty/aman/image_12._SY530_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Haircare/Hex-card_04._CB648260906_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Haircare/Hex-card_05._SY530_QL85_.jpg'alt=''></img> 
  
  </div>

      <div className="home_row">
        <Product
          id="123456"
          title="L'Oreal Paris Moisture Sealing Conditioner, With Hyaluronic Acid, For Dry & Dehydrated Hair, Adds Shine & Bounce, Hyaluron Moisture 72H, 180ml"
          price={245}
          image="https://m.media-amazon.com/images/I/41Kshrsqy2L._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Ravel Customized Hair Fall Control & Strengthen Starter Regimen for Oily Scalp & Wavy Hair, Customized for Dry/Normal/Oily Hair, 5 Product kit - Shampoo + Conditioner + Mask + Serum + Oil"
          price={1299}
          image="https://m.media-amazon.com/images/I/71V-ndfReZL._SX679_PIbundle-5,TopRight,0,0_AA679SH20_.jpg"
        />
        <Product
          id="123456"
          title="WishCare Hair Growth Serum Concentrate - 3% Redensyl, 4% Anagain, 2% Baicapil, Caffeine, Biotin, Plant Keratin & Rice Water - Hair Growth Serum for Men & Women"
          price={681}
          image="https://m.media-amazon.com/images/I/51i+CX3tSPL._SY300_SX300_.jpg"
        />
        <Product
          id="123456"
          title="L'Oreal Paris Permanent Hair Colour, Radiant At-Home Hair Colour with up to 100% Grey Coverage, Pro-Keratin, Up to 8 Weeks of Colour, Excellence Crème, 3 Dark Brown, 72ml+100g
          "
          price={490}
          image="https://m.media-amazon.com/images/I/61wHkCENFtL._SX679_.jpg"
        />
      </div>

    </div>
  )
}

export default Haircare
