import React from 'react'
import Product from "./Product";
function Mattress() {
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
          title="Livpure Smart Duos Reversible HR Foam Mattress |3D Sleep Zones| Manufactured with Dow ComfortScience | Premium Certified Fabric | EGAPA Purifying Filter | Double 72x48x5 inches, Removable Zipper Cover"
          price={5752}
          image="https://m.media-amazon.com/images/I/41sOvgrcVoL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Livpure Smart Ortho Duos Reversible Dual HR Foam Mattress |Orthopaedic Reversible Comfort Medium Firm and Firm| Premium Certified Fabric| Queen Bed (72x60x5) inches, Removable Zipper Cover"
          price={7245}
          image="https://m.media-amazon.com/images/I/41tFRyDVzmL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Sleepyhead Flip - Dual Sided High Density Foam Mattress with Firm & Soft Sides, (78x60x5 inches, Queen Size)"
          price={8698}
          image="https://m.media-amazon.com/images/I/51q7dtqH+aL._SY300_SX300_.jpg"
        />
        <Product
          id="123456"
          title="The Sleep Company SmartGRID Ortho 6 Inch Mattress King Size | AIHA Certified Medium Firm Orthopedic Mattress for Back Pain Relief | Patented Japanese SmartGRID Technology | 78x72 | 10 Years Warranty"
          price={20930}
          image="https://m.media-amazon.com/images/I/41AjofyxOYL._SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>

    </div>
  )
}

export default Mattress
