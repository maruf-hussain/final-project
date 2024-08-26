import React from 'react';
import Banner from '../Banner/Banner';
import Phone from '../Phone/Phone';
import Category from '../Category/Category';
import Some from '../Some/Some';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Category></Category>
        <Some></Some>
        <PopularMenu></PopularMenu>
        <Phone></Phone>
        <Featured></Featured>
        </div>
    );
};

export default Home;