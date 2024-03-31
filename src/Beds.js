import React from 'react'
import Product from "./Product";

function Beds() {
  return (
    <div>
     
     <img className='camera_banner' src='https://m.media-amazon.com/images/G/31/IMG20/Furniture/2024/March/PC_3000x700._SX3000_QL85_.jpg'alt=''></img> 

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
          title="@home by Nilkamal Marbito Engineered Wood Queen Bed with Headboard & Box Storage (White) 1 Year Manufacturer's Warranty"
          price={17999}
          image="https://m.media-amazon.com/images/I/41I6ehhRzhL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Amazon Brand - Solimo Picton Engineered Wood Queen Size Bed with Storage (Wenge)"
          price={13969}
          image="https://m.media-amazon.com/images/I/41Qo1ylzpuL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Amazon Brand - Solimo Canes Engineered Wood King Bed with Box Storage (Wenge finish)"
          price={16159}
          image="https://m.media-amazon.com/images/I/41udkcol6nL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Amazon Brand - Solimo Medusa Engineered Wood Queen Bed (Walnut Finish)"
          price={10439}
          image="https://m.media-amazon.com/images/I/510-VWGRzbL._SY300_SX300_QL70_FMwebp_.jpg"
        />
      </div>


    </div>
  )
}

export default Beds
