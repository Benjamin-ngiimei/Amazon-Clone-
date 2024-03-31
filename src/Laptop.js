import React from 'react'
import Product from "./Product";
function Laptop() {
  return (
    <div className=''>

         <img className='camera_banner' src='https://m.media-amazon.com/images/G/31/img23/BAU-Mar/Laptops_Brands-COOP/Asus_ZenBook_1500._CB579752123_.jpg'alt=''></img> 

<h2>Shop by Brand</h2>

<div className='phone_item'>
   <img src='https://m.media-amazon.com/images/G/31/img23/Laptops_Revamp/Brand_dell._CB586930218_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Laptops_Revamp/Brand_honor._CB586930218_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Laptops_Revamp/Brand_hp._CB586930218_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Laptops_Revamp/Brand_acer._CB586930218_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Laptops_Revamp/Brand_asus._CB586930218_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Laptops_Revamp/Brand_Lenavo._CB586930218_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Laptops_Revamp/Brand_Samsung._CB586930218_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Laptops_Revamp/Brand_Apple._CB586930218_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Laptops_Revamp/Brand_MSI._CB586930218_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Laptops_Revamp/Brand_mi._CB586930218_.png'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Laptops_Revamp/Brand_tecno._CB586930218_.png'alt=''></img> 
  
  </div>

      <div className="home_row">
        <Product
          id="123456"
          title="Samsung Galaxy Book4 Pro 360 (Moonstone Gray, 16GB RAM, 1TB SSD)| 16 Dynamic AMOLED 2X Touchscreen| Intel Core Ultra 7 155H Processor| 2 in 1 Laptop| Windows 11 Home| MS Office 2021| S-Pen Included"
          price={179990}
          image="https://m.media-amazon.com/images/I/71rWJXZT+zL._AC_UL640_QL65_.jpg"
        />
        <Product
          id="123456"
          title="HP Laptop 15s, 12th Gen Intel Core i3, 15.6-inch (39.6 cm), 8GB DDR4, 512GB SSD, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), fq5007TU / FQ5327TU"
          price={37480}
          image="https://m.media-amazon.com/images/I/71f2lQ3ESWL._AC_UL640_QL65_.jpg"
        />
        <Product
          id="123456"
          title="Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver"
          price={79990}
          image="https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UL640_QL65_.jpg"
        />
        <Product
          id="123456"
          title="TECNO MEGABOOK T1, Intel Core 11th Gen i3 Processor (8GB RAM/ 512GB SSD Storage), 15.6-Inch (39.62 CM) Eye Comfort disply, (14.8mm Ultra Slim/ 70 Wh Large Battery/Windows 11/ Space Grey / 1.56 Kg)"
          price={23990}
          image="https://m.media-amazon.com/images/I/61xY8U1KM5L._AC_UL640_QL65_.jpg"
        />
      </div>

    </div>
  )
}

export default Laptop
