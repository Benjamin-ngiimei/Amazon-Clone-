import React from 'react'
import './Furniture.css'

function Furniture() {
  return (
    <div className='Sub_furniture'>
      {/* <h2>Furniture</h2> */}
      <a href='./Mattress' > <div className='mattress'>
        <h2>Mattress</h2> 
         <img src='https://m.media-amazon.com/images/G/31/IMG20/Furniture/2022/New-logos/NAv-tiles-bau/mattresses._SS400_QL85_.jpg'alt=''></img> 
        </div></a>
        <a href='./Beds' > <div className='beds'>
        <h2>Beds</h2> 
         <img src='https://m.media-amazon.com/images/G/31/IMG20/Furniture/2022/New-logos/NAv-tiles-bau/beds._SS400_QL85_.jpg'alt=''></img> 
        </div></a>
        <a href='./Sofas' > <div className='sofas'>
        <h2>sofas and Sofa set</h2> 
         <img src='https://m.media-amazon.com/images/G/31/IMG20/Furniture/2022/New-logos/NAv-tiles-bau/3_Seater_Sofa._SS400_QL85_.jpg'alt=''></img> 
        </div></a>

        <div className='electronic_banner'>
        <img src='https://m.media-amazon.com/images/G/31/IMG20/Furniture/2024/March/PC_3000x700._SX3000_QL85_.jpg' alt=''/><br></br>
        <img src='https://m.media-amazon.com/images/G/31/IMG20/Furniture/2024/BAU-HEADER-PCJAN29._SX3000_QL85_.jpg' alt=''/>
        </div>


    </div>
  )
}

export default Furniture

