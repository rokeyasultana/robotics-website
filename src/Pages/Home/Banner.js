import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div 
      
        >
          <div   style={{
          background:`url(https://ak.picdn.net/shutterstock/videos/33968725/thumb/1.jpg)`
      }}
        
          class="hero min-h-screen  text-white">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://preview.colorlib.com/theme/robotics/img/xbanner-img.png.pagespeed.ic.rP02BqzGTZ.webp" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      
      <h1 class="py-6">EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</h1>
      <p class="text-5xl font-bold">Improved Production level with Robotics</p>
      <button class="btn btn-neutral text-white text-white  mt-5 uppercase w-full max-w-xs">View Details</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;