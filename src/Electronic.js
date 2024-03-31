import React from 'react'
import './Electronic.css'

function Electronic() {
  return (
    
    <div className='Sub_electronic' >
     
      <a href='./Camera' > <div className='camera'>
        <h2>Camera</h2> 
         <img src='https://m.media-amazon.com/images/G/31/img23/CEPC/BAU/ELP/navtiles/Cameras._CB574550011_.png'alt=''></img> 
        </div></a>
        <a href='./Phone' > <div className='phone'>
        <h2>Phone & accessories</h2> 
         <img src='https://m.media-amazon.com/images/G/31/img23/CEPC/BAU/ELP/navtiles/Tablets._CB574550011_.png'alt=''></img> 
        </div></a>
        <a href='./Laptop' > <div className='laptop'>
        <h2>Laptop</h2> 
         <img src='https://m.media-amazon.com/images/G/31/img23/CEPC/BAU/ELP/navtiles/Gaming-laptops._CB574550011_.png'alt=''></img> 
        </div></a>

        <div className='electronic_banner'>
        <img src='https://m.media-amazon.com/images/G/31/IMG20/CEPC_soundbars_speakers/FEB_2024/R01_ATF_Banner_1500x300._CB579178371_.jpg' alt=''/><br></br>
        <img src='https://m.media-amazon.com/images/G/31/img15/zak/24/Mar/ggd/GGD_1500x300_Mar._CB561184937_.jpg' alt=''/>
        </div>
       
    </div>
  )
}

export default Electronic
