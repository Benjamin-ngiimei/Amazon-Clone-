import React from "react";
import './Camera.css';
import Product from "./Product";

function Camera() {
  return (
    <div className="">
<img className='camera_banner' src='https://m.media-amazon.com/images/G/31/img21/BAU/Headers/CAMERA/MI/Cam_Header_1500X300._CB589953778_.jpg'alt=''></img> 

      <h2>Explore top camera brands</h2>

      <div className='camera_item'>
         <img src='https://m.media-amazon.com/images/G/31/img21/Camera/Shopbybrand/New/1._SS300_QL85_FMpng_.png'alt=''></img> 
         <img src='https://m.media-amazon.com/images/G/31/img21/Camera/Shopbybrand/New/2._SS300_QL85_FMpng_.png'alt=''></img> 
         <img src='https://m.media-amazon.com/images/G/31/img21/Camera/Shopbybrand/New/3._SS300_QL85_FMpng_.png'alt=''></img> 
         <img src='https://m.media-amazon.com/images/G/31/img21/Camera/Shopbybrand/New/4._SS300_QL85_FMpng_.png'alt=''></img> 
         <img src='https://m.media-amazon.com/images/G/31/img21/Camera/Shopbybrand/New/5._SS300_QL85_FMpng_.png'alt=''></img> 
         <img src='https://m.media-amazon.com/images/G/31/img21/Camera/Shopbybrand/New/6._SS300_QL85_FMpng_.png'alt=''></img> 
         <img src='https://m.media-amazon.com/images/G/31/img21/Camera/Shopbybrand/New/7a._SS300_QL85_FMpng_.png'alt=''></img> 
         <img src='https://m.media-amazon.com/images/G/31/img21/Camera/Shopbybrand/New/8a._SS300_QL85_FMpng_.png'alt=''></img> 
         <img src='https://m.media-amazon.com/images/G/31/img21/Camera/Shopbybrand/New/9a._SS300_QL85_FMpng_.png'alt=''></img> 
         <img src='https://m.media-amazon.com/images/G/31/img21/Camera/Shopbybrand/New/10a._SS300_QL85_FMpng_.png'alt=''></img> 
         <img src='https://m.media-amazon.com/images/G/31/img21/S3P/New/BAU_Collapsable-feature-halo_13._SS300_QL85_FMpng_.png'alt=''></img> 
        
        </div>

      <div className="home_row">
        <Product
          id="123456"
          title="Canon EOS 5D Mark IV 30.4 MP Digital SLR Camera (Black) + EF 24-105mm is II USM Lens Kit + SanDisk 128GB Extreme Pro SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card"
          price={180599}
          image="https://m.media-amazon.com/images/I/81KniKQ71CL._SX679_.jpg"
        />
        <Product
          id="123456"
          title="Nikon Mirrorless Z7 II Body with 24-70mm Lens with Additional Battery, Optical Zoom, Black"
          price={264899}
          image="https://m.media-amazon.com/images/I/41JLav2Y3aL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Sony Alpha ILCE-7RM3A Full-Frame 42.4MP Mirrorless Camera Body (4K Full Frame, Real-Time Eye Auto Focus, Animal Eye AF, Tiltable LCD, 2.7 Optical Zoom) - Black"
          price={178990}
          image="https://m.media-amazon.com/images/I/41ig8ovffjL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="123456"
          title="Sigma 150-600 Mm F/5-6.3 Dg Os HSM Contemporary Lens for Canon Cameras (745101, Black)"
          price={[96,690]}
          image="https://m.media-amazon.com/images/I/614GmQI2HjL._SX679_.jpg"
        />

      </div>

    </div>
  );
}

export default Camera;
