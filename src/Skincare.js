import React from 'react'
import Product from "./Product";
function Skincare() {
  return (
    <div>
      
      <img className='camera_banner' src='https://m.media-amazon.com/images/G/31/img24/Beauty/derma/v1/Skincare-page._CB561447169_.gif'alt=''></img> 

<h2>Top brands</h2>

<div className='phone_item'>
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Skincare/Brands/wrs-brandtiles-01_01._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Skincare/Brands/wrs-brandtiles-01_02._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Skincare/Brands/wrs-brandtiles-01_03._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Skincare/Brands/wrs-brandtiles-01_04._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Skincare/Brands/wrs-brandtiles-01_05._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Skincare/Brands/wrs-brandtiles-01_06._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Skincare/Brands/wrs-brandtiles-02_01._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Skincare/Brands/wrs-brandtiles-02_02._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img22/Beauty/WRS/Minimalist._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Skincare/Brands/wrs-brandtiles-02_04._SY530_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Beauty/EOSS/December/Skincare/Brands/wrs-brandtiles-02_06._SY530_QL85_.jpg'alt=''></img> 
  
  </div>

      <div className="home_row">
        <Product
          id="123456"
          title="Gabit Skincare Gamechangers Kit, Skin Care Routine Kit For Unisex, Face Wash, Serum, Sunscreen & Moisturizer Combo,280 ml"
          price={1547}
          image="https://m.media-amazon.com/images/I/31LLBKjRLPL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Nivarana Skin Aid Oil | Suitable for Kids & Adults | Minimizes Redness in Sensitive Areas | Manages Odor from Fungal Infections | Ayurvedic Oil for Skin Care | Prevents Diaper Rash | 30ml"
          price={649}
          image="https://m.media-amazon.com/images/I/71zSiPMi63L._SX679_.jpg"
        />
        <Product
          id="123456"
          title="Minimalist Sunscreen SPF 50 PA++++ | Clinically Tested in US (In-Vivo) | Lightweight with Multi-Vitamins | No White Cast | Broad Spectrum | For Women & Men | 50g"
          price={379}
          image="https://m.media-amazon.com/images/I/313nf+p926L._SY300_SX300_.jpg"
        />
        <Product
          id="123456"
          title="Spawake Skin Care Kit Brightening (Face Wash + Face Serum + Moisturizer + Night Cream) 190g
          "
          price={1265 }
          image="https://m.media-amazon.com/images/I/416qE0mv39L._SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>


    </div>
  )
}

export default Skincare
