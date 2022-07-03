import React from 'react';
import Banner from './Banner';
import Products from './Products';
import SecondBanner from './SecondBanner';

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <Products></Products> 
          <SecondBanner></SecondBanner>
        </div>
    );
};

export default Home;