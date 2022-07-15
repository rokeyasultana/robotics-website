import React from 'react';
import Card from '../Home/Card';
import Brand from './Brand';
import Features from './Features';


const Services = () => {
    return (
        <div>
            <div>
                <h2 className='text-3xl text-center font-bold mb-24'>Service</h2>

            </div>

            <div>
                <div >
                    <h2 className='text-3xl font-bold text-center text-purple-300'>Our Offered Services to you</h2>
                    <p className='text-center mt-2'>Who are in extremely love with eco friendly system.</p>
                </div>

                <div className='justify-center justify-items-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-11 mb-5 gap-4'>
                <div class="card w-96 text-left ">
  <figure><img src="https://preview.colorlib.com/theme/robotics/img/xos1.jpg.pagespeed.ic.1RGVk8aNyx.webp" alt="" /></figure>
  <div class="card-body">
    <h2 class="text-left font-bold text-xl hover:text-purple-400">Drone Architecture</h2>
    <p>inappropriate behavior is often laughed off as “boys will be boys,” women<br></br> face higher conduct women face higher conduct.</p>
    
  </div>
</div> 
                <div class="card w-96 text-left ">
  <figure><img src="https://preview.colorlib.com/theme/robotics/img/xos2.jpg.pagespeed.ic.FJFM1FA7RB.webp" alt="" /></figure>
  <div class="card-body">
    <h2 class="text-left font-bold text-xl hover:text-purple-400">Industrial Robot Management</h2>
    <p>inappropriate behavior is often laughed off as “boys will be boys,” women<br></br> face higher conduct women face higher conduct.</p>
    
  </div>
</div> 
                <div class="card w-96 text-left ">
  <figure><img src="https://preview.colorlib.com/theme/robotics/img/xos3.jpg.pagespeed.ic.fBjyUWxtok.webp" alt="" /></figure>
  <div class="card-body">
    <h2 class="text-left font-bold text-xl hover:text-purple-400">Drone Architecture</h2>
    <p>inappropriate behavior is often laughed off as “boys will be boys,” women<br></br> face higher conduct women face higher conduct.</p>
    
  </div>
</div> 
                </div>
            </div>

            <Features></Features>
   <Brand></Brand>
        </div>
    );
};

export default Services;