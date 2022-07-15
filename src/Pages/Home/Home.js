import React from 'react';
import Banner from './Banner';
import Card from './Card';
import Products from './Products';
import SecondBanner from './SecondBanner';
import ThirdBanner from './ThirdBanner';

const Home = () => {
    return (
        <div>
          <Banner></Banner> 
          <Products></Products> 
          <SecondBanner></SecondBanner>
          <Card></Card>
          <ThirdBanner></ThirdBanner>
        
       
        </div>
    );
};

export default Home;