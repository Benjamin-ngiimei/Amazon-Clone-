import React from 'react'
import Product from "./Product";
function Kids() {
  return (
    <div>
      
      <img className='camera_banner' src='https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/Hero/Bestsellers_3000x800._SX3000_QL85_FMpng_.png'alt=''></img> 
      <img className='camera_banner' src='https://m.media-amazon.com/images/G/31/Symbol/2023/CatPage_Herotators/PC/MFA_PC_1_13._CB603608046_.png'alt=''></img>
<h2>TOP BRAND OFFERS</h2>

<div className='phone_item'>
   <img src='https://m.media-amazon.com/images/G/31/Symbol/2023/EOSS/CatPage/Kids/Boy-s-t-shirts-polos_14._SS400_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/Symbol/2023/EOSS/CatPage/Kids/Girls-T-shirts_27._SS400_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/Symbol/2023/EOSS/CatPage/Kids/Girls-Dresses_51._SS400_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/Symbol/2023/EOSS/CatPage/Kids/Boys-Jeans_4._SS400_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/Symbol/2023/EOSS/CatPage/Kids/Girls-Jeans_3._SS400_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/Symbol/2023/EOSS/CatPage/Kids/Baby-clothing_24._SS400_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/Babyheroscroll/v1/Cosy_wear_978x1383._SS400_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/Babyheroscroll/v1/Dresses_978x1383._SS400_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/Babyheroscroll/v1/Dresses_978x1383._SS400_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/Babyheroscroll/v1/Clothing_sets_978x1383._SS400_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Fashion/KF/Flip/Winterwearflip/Babyheroscroll/v1/T-shirts_and_tops_978x1383._SS400_QL85_FMpng_.png'alt=''></img> 
  
  </div>

      <div className="home_row">
        <Product
          id="123456"
          title="KIDZLIFE Baby Girls Angel Pari Dress|Christmas Gown|Wedding Dress-"
          price={679}
          image="https://m.media-amazon.com/images/I/51occQXnX+L._SY879_.jpg"
        />
        <Product
          id="123456"
          title="Bon Organik Unisex My First Holi Bodysuit Baby"
          price={269}
          image="https://m.media-amazon.com/images/I/51ZQzVWvFyL._SX679_.jpg"
        />
        <Product
          id="123456"
          title="Alan Jones Clothing Camouflage Regular Fit Boy's Polo T-Shirt"
          price={349}
          image="https://m.media-amazon.com/images/I/71UJdnIXsjL._SY879_.jpg"
        />
        <Product
          id="123456"
          title="SPAMITUDE - Kids Girls Mini Short Bodycon Party Dress| Knee Length Sequin Party Dress for Girls | Designer Sequin Dress for Girls"
          price={339}
          image="https://m.media-amazon.com/images/I/41PX2vXh-8L.jpg"
        />
      </div>

    </div>
  )
}

export default Kids
