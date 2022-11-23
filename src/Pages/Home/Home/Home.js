import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Categories></Categories>
            <Summary></Summary>
        </div>
    );
};

export default Home;