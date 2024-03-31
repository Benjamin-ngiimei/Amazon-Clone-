import React from 'react'
import Product from "./Product";
import './Phone.css';

function Phone() {
  return (
    <div className=''>
      <img className='camera_banner' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Isha/D123726278_IN_WLD_Tecno_Co-op_Creatives_1242x450_3.jpg'alt=''></img> 

<h2>Latest launches in Mobiles & Accessories</h2>

<div className='phone_item'>
   <img src='https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/NewLaunch/realme/70pro/GWset/22March/12PM/D120445981_Launch_Latest-launches_557x742_2._SS600_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/D123068930_WLD_OnePlus_Benz_NewLaunch_557x742._SS600_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Wireless/Samsung/SamsungM/M15/Teaser/Rv1/D124657878_Latestlaunches_1._SS600_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Wireless/Samsung/SamsungM/M55/Teaser/D124658035_IN_WLD_Samsung_M55_Launch_Latest-launches_2._SS600_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/Z9/DB/D120661770_NewLaunch_Launch_Latest-launches._SS600_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/brandstore/QuestdayiQOO/iQOOCreatives/Launch_Latest-launches_557x742_3._SS600_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Wireless/TECNOJIO/NLXCREATIVES/LAVA/sale/Latest-launches._SS600_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Wireless/TECNOJIO/NLXCREATIVES/launch/updated/Latest-launches._SS600_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img21/Wireless/NEWCREATIVES/HOLISTORETECNO/D120288637_Latestlaunches_temp_5._SS600_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Wireless/Samsung/Tiles/16thMarch/D122270679_IN_WLD_Samsung_M14_Lite_Launch_Latest-launches._SS600_QL85_.jpg'alt=''></img> 
   <img src='https://m.media-amazon.com/images/G/31/img24/Wireless/Samsung/SamsungBau/A35/16thMarch/D122464090_IN_WLD_Samsung_A35_Launch_Latest-launches_1._SS600_QL85_.jpg'alt=''></img> 
  
  </div>


      <div className="home_row">
        <Product
          id="123456"
          title="realme narzo 60X 5G (Stellar Green,6GB,128GB Storage) Up to 2TB External Memory | 50 MP AI Primary Camera | Segments only 33W"
          price={14499}
          image="https://m.media-amazon.com/images/I/81WimZLWH1L._AC_UL640_QL65_.jpg"
        />
        <Product
          id="123456"
          title="OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 8GB RAM, 128GB Storage)"
          price={17999}
          image="https://m.media-amazon.com/images/I/61LB+d0vheL._AC_UL640_QL65_.jpg"
        />
        <Product
          id="123456"
          title="POCO C51 (Royal Blue, 6GB RAM, 128GB Storage)"
          price={5999}
          image="https://m.media-amazon.com/images/I/61uUEqO5uQL._AC_UL640_QL65_.jpg"
        />
        <Product
          id="123456"
          title="OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)"
          price={[17999]}
          image="https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL640_QL65_.jpg"
        />

      </div>

    </div>
  )
}

export default Phone
