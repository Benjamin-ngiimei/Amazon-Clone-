import React from 'react'
import './Product_category.css';


function Product_category() {
  return (
    <div className='Product_main'>
       
       <a href='./Electronic' > <div className='electronic'>
        <h2>Electronic</h2> 
         <img src='https://m.media-amazon.com/images/G/31/img15/zak/24/dell/BAU_ATF_HALO_Dell_1._CB583176886_.png'alt=''></img> 
        </div></a>

        <a href='./Clothing' ><div className='clothing'>
            <h2>Clothing</h2>
             <img src='https://m.media-amazon.com/images/I/61D+dmreFJL._AC_UF334,334_FMjpg_.png'alt=''></img> 
        </div> </a>
        
        <a href='./Furniture' ><div className='furniture'>
            <h2>Furnitures</h2>
             <img src='https://m.media-amazon.com/images/I/61VoVk8ystL.AC_SX500.jpg'alt=''></img> 
        </div></a>
        <a href='./Beauty' ><div className='beauty'>
            <h2>Beauty</h2>
             <img src='https://m.media-amazon.com/images/G/31/img24/Beauty/Revamp/Halos/lux_beauty._SS300_QL85_FMpng_.png'alt=''></img> 
        </div></a>

        <div className='electronic_banner'>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/revised/skincare-PC_3000_1200w._CB561095734_.jpg' alt=''/><br></br>
        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/2024/Gateway/March/Unrec/29_Mar1_PC._CB561087332_.jpg' alt=''/>
        </div>
     
    </div>
  )
}

export default Product_category
