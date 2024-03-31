import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
import Product from './Product';


function Home() {
  return (
    
    <div className='home'>

<nav className='Nav2'>
   <div className='Nav2_sideBar'><a href='/'><FaBars className='Nav2_Bar'/>ALL</a></div>
  <div className='Nav2_Link'>
  <Link to='./Product_category'><p> Product Category</p></Link>
  <Link to='./'><p>Fresh</p></Link> 
  <Link to='./Electronic'><p>Electronic</p></Link>
  <Link to='./Clothing'><p>Fashion</p></Link>
  <Link to='./Phone'><p>Mobile</p></Link>
  <Link to='./Beauty'><p>beauty & Personal care</p></Link>
  <Link to='./'><p>New Release</p></Link>
  <Link to='./AmazonminiTV'><p>Amazon miniTV</p></Link>
  <img src='https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Playground/SWM_400x39._CB561512404_.jpg' alt=''/>
  </div>
  </nav>
  {/* <IoIosArrowBack className='Prev_btn'/>
  <IoIosArrowForward className='Next_btn'/> */}

        <a href='./Product'><img  className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/CE/March/Unrec/HF/Under_1499_Tallhero_3000x1200._CB581730972_.jpg' alt=''/></a>
        {/* <a href='./Product'><img  className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg' alt=''/></a>
        <a href='./Product'><img  className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/marmfd/new/MA_2x._CB580132721_.jpg' alt=''/></a>
        <a href='./Product'><img  className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/GW-Hero-PC_BBAug23_Soft-toys_with-Apay_Lifestyle_2x._CB597740150_.jpg' alt=''/></a>
         */}
    
    <div className='home_row'> 
<Product 
 id="123456"
 title='Samsung Galaxy Tab S6 Lite 26.31 cm (10.4 inch), S-Pen in Box, Slim and Light, Dolby Atmos Sound, 4 GB RAM, 64 GB ROM, Wi-Fi Tablet, Gray'
 price={22999}
 image ="https://m.media-amazon.com/images/I/61vsK7h3zVL._SX679_.jpg"
 />
  <Product 
 id="123456"
 title='OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage)'
 price={1599}
 image ="https://m.media-amazon.com/images/I/61LB+d0vheL._SX679_.jpg"
 />
  <Product 
 id="123456"
 title='Realme Buds Wireless 3 in-Ear Bluetooth Headphones,30dB ANC,Spatial Audio,13.6mm Dynamic Bass Driver,Upto 40 HrsPlayback'
 price={1599}
 image ="https://m.media-amazon.com/images/I/51d2i+-eVIL._SL1500_.jpg"
 />

<Product 
 id="123456"
 title='swanart Modern Lighting Chandelier Glass Light for Living Dining Room Round Hanging LED Lights'
 price={1999}
 image ="https://m.media-amazon.com/images/I/61gjr14DjiL._AC_SY400_.jpg"
 />


<Product 
 id="123456"
 title='STRIFF Mpad Mouse Mat 230X190X3mm Gaming Mouse Pad, Non-Slip Rubber Base, Waterproof Surface, Premium-Textur…'
 price={99}
 image ="https://m.media-amazon.com/images/I/61zroMjd9FL._AC_SY350_.jpg"
 />


<div className='home_row1'>

<Product 
 id="123456"
 title='EDYELL C6 130H Neckband Earphone with Type C Fast Charge, Bluetooth 5.3 In Ear Wireless Neckband with Mic, 10mm Drivers ENC, Dual Battery Neckbands for Music/Travelling/Calling'
 price={1999 }
 image ="https://m.media-amazon.com/images/I/71vgyDjjoeL._AC_SY400_.jpg"
 />
 <Product 
 id="123456"
 title='UNIQUE WOOD ART Wooden Room Partition for Living Room |Screen Separator | Room Wall Divider | Wooden Hall Partition Furniture for | Bedroom | Office | Restaurant 4 Panels Mix Design 4 Feet'
 price={1599}
 image ="https://m.media-amazon.com/images/I/91X02MZ0CJL._AC_SY400_.jpg"
 />

<Product 
 id="123456"
 title='UNIQUELLA Pack of 1 PcsDoorway String Thread Decorative Curtains 7 Ft Long 3.8 Ft Wide Brown Gold for Door & Window'
 price={398}
 image ="https://m.media-amazon.com/images/I/81nL2BHWqYL._AC_SY400_.jpg"
 />
  <Product 
 id="123456"
 title='Realme Buds Wireless 3 in-Ear Bluetooth Headphones,30dB ANC,Spatial Audio,13.6mm Dynamic Bass Driver,Upto 40 HrsPlayback'
 price={1599}
 image ="https://m.media-amazon.com/images/I/61c575GViJL._SX679_.jpg"
 />
  {/* <Product 
 id="123456"
 title='Realme Buds Wireless 3 in-Ear Bluetooth Headphones,30dB ANC,Spatial Audio,13.6mm Dynamic Bass Driver,Upto 40 HrsPlayback'
 price={1599}
 image ="https://m.media-amazon.com/images/I/61c575GViJL._SX679_.jpg"
 />
  <Product 
 id="123456"
 title='Realme Buds Wireless 3 in-Ear Bluetooth Headphones,30dB ANC,Spatial Audio,13.6mm Dynamic Bass Driver,Upto 40 HrsPlayback'
 price={1599}
 image ="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/372x232_Home_decor_1._SY232_CB584596691_.jpg"
 />
  */}
</div>
</div>

{/* Mobile/phone */}
  <div className='home_row2'>
<Product 
 id="123456"
 title='iQOO Neo9 Pro 5G (Fiery Red, 8GB RAM, 256GB Storage)'
 price={36999 }
 image ="https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY400_.jpg"
 />

<Product 
 id="123456"
 title='iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage)'
 price={24999 }
 image ="https://m.media-amazon.com/images/I/41yAce7gd4L._AC_SY400_.jpg"
 />

<Product 
 id="123456"
 title='Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage)'
 price={7799 }
 image ="https://m.media-amazon.com/images/I/411iWoJEJjL._AC_SY400_.jpg"
 />

<Product 
 id="123456"
 title='Redmi 12 5G Moonstone Silver 6GB RAM 128GB ROM'
 price={12999}
 image ="https://m.media-amazon.com/images/I/41GsqdiCvOL._AC_SY400_.jpg"
 />
 <Product 
 id="123456"
 title='iQOO 12 5G (Legend, 12GB RAM, 256GB Storage) | India 1st Snapdragon® 8 Gen 3'
 price={52999}
 image ="https://m.media-amazon.com/images/I/411gvmvNQzL._AC_SY400_.jpg"
 />

  </div>  
  
 {/* Product */}
 <div className='home_row2'>
 <Product 
 id="123456"
 title='iQOO Neo9 Pro 5G (Fiery Red, 8GB RAM, 256GB Storage)'
 price={36999 }
 image ="https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY400_.jpg"
 />

<Product 
 id="123456"
 title='iQOO Z7 Pro 5G (Blue Lagoon, 8GB RAM, 256GB Storage)'
 price={24999 }
 image ="https://m.media-amazon.com/images/I/41yAce7gd4L._AC_SY400_.jpg"
 />

<Product 
 id="123456"
 title='Redmi 13C (Stardust Black, 4GB RAM, 128GB Storage)'
 price={7799 }
 image ="https://m.media-amazon.com/images/I/411iWoJEJjL._AC_SY400_.jpg"
 />

<Product 
 id="123456"
 title='Redmi 12 5G Moonstone Silver 6GB RAM 128GB ROM'
 price={12999}
 image ="https://m.media-amazon.com/images/I/41GsqdiCvOL._AC_SY400_.jpg"
 />
 <Product 
 id="123456"
 title='iQOO 12 5G (Legend, 12GB RAM, 256GB Storage) | India 1st Snapdragon® 8 Gen 3'
 price={52999}
 image ="https://m.media-amazon.com/images/I/411gvmvNQzL._AC_SY400_.jpg"
 />
 </div>

 </div>
  )
}

export default Home
