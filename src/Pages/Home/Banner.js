import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div 
        style={{
            background:`url(https://images.unsplash.com/photo-1470690096659-6f59b9b39fd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80)`
        }}
        
        >
          <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://preview.colorlib.com/theme/robotics/img/xbanner-img.png.pagespeed.ic.rP02BqzGTZ.webp" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      
      <h1 class="py-6">EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS</h1>
      <p class="text-5xl font-bold">Improved Production level with Robotics</p>
      <button class="btn btn-primary">View Details</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;