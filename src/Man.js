import React from 'react'
import Product from "./Product";

function Man() {
  return (
    <div className=''>

<img className='camera_banner' src='https://m.media-amazon.com/images/G/31/img21/MA2023/AFrevamp_winterflip/Menhero/output_top-brands-2_3000x800_0._CB585741058_.gif'alt=''></img> 

<h2>TOP BRANDS ON TOP DEALS</h2>

<div className='phone_item'>
   <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/topbrands/USPA1._SX846_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/topbrands/allen_solly_978x1381_1701946871462_11._SX846_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/topbrands/Van_heusen1._SX846_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/topbrands/levis_978x1381_1701946871464_13._SX846_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/topbrands/The_Souled_Store_978x1381._SX846_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/topbrands/Puma_978x1381_1707460035736_0._SX846_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/tops/brands/UCB_978x1383._SY530_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/tops/brands/Arrow_978x1383._SY530_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/tops/brands/TIGC_978x1383._SY530_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/tops/brands/symbol_978x1383._SY530_QL85_FMpng_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/tops/brands/Veirdo_u499_978x1383._SY530_QL85_FMpng_.png'alt=''></img> 
  
  </div>

      <div className="home_row">
        <Product
          id="123456"
          title="U.S. POLO ASSN. Men's Trench Coat"
          price={3250}
          image="https://m.media-amazon.com/images/I/61R19QB2iGL._SX679_.jpg"
        />
        <Product
          id="123456"
          title="Allen Solly Men's Regular Fit Shirt"
          price={959}
          image="https://m.media-amazon.com/images/I/51IXgnpzkFL._SY879_.jpg"
        />
        <Product
          id="123456"
          title="VASTRAMAY Mens Cotton Blend Kurta - Timeless Elegance for Festivals & Events | Solid Plain Full Sleeves Mandarin Collar Kurta | Classic Design, Premium Comfort, and Versatile Style"
          price={802}
          image="https://m.media-amazon.com/images/I/61NMse4oqTL._SY879_.jpg"
        />
        <Product
          id="123456"
          title="AUSK T-Shirt for Mens Double Stripes on Chest"
          price={215}
          image="https://m.media-amazon.com/images/I/81PXQy3DOVL._SY879_.jpg"
        />
      </div>


    </div>
  )
}

export default Man
