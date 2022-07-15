import React from 'react';

const ThirdBanner = () => {
    return (
        <div>
          <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img 
    style={{height:"500px",width:"400px"}}
    src="https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
        <p className='text-purple-300'>BRAND NEW APP TO BLOW YOUR MIND</p>
      <h1 class="text-5xl font-bold">We’ve made a life
that will change you</h1>
      <p class="py-6 font-bold">We are here to listen from you deliver exellence</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmo d tempor incididunt ut labore et dolore magna aliqua.</p>

      <button class="btn btn-neutral text-white mt-5 w-full max-w-xs">Get Started Now</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default ThirdBanner;