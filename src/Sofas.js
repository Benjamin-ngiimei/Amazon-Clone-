import React from 'react'
import Product from "./Product";
function Sofas() {
  return (
    <div>
      
           
     <img className='camera_banner' src='https://m.media-amazon.com/images/G/31/IMG20/Furniture/2023/Header/Clearance-pc._SX3000_QL85_.jpg'alt=''></img> 

{/* <h2>TOP BRANDS ON TOP DEALS</h2>

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
  
  </div> */}

      <div className="home_row">
        <Product
          id="123456"
          title="FURNY Florida Fabric 4 Seater RHS L Shape Sofa Set with 2 Puffy (Blue-Grey)"
          price={18099}
          image="https://m.media-amazon.com/images/I/41X7V7Oo0hL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Seventh Heaven Milan Sofa, Chenille Molfino Fabric: 3 Year Warranty (Maroon, 3 Seater), 3-Person Sofa"
          price={12998}
          image="https://m.media-amazon.com/images/I/41lkwBSJCQL._SY300_SX300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Amazon Brand - Solimo Duyce 3 Seater Sofa (Fabric, Grey)"
          price={15799}
          image="https://m.media-amazon.com/images/I/41liHEBO14L._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Seventh Heaven Milan 2 Seater Sofa, Chenille Molfino Fabric: 3 Year Warranty (Blue, 2 Seater)"
          price={10888}
          image="https://m.media-amazon.com/images/I/81iq-k7clFL._SX679_.jpg"
        />
      </div>


    </div>
  )
}

export default Sofas
