import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Contact from '../../Contact/Contact';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Gallery from '../Gallery/Gallery';
import Summary from '../Summary/Summary';

const Home = () => {
    useTitle("Home");
    return (

        <div className='container mx-auto'>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Categories></Categories>
            <Gallery></Gallery>

            <Summary></Summary>
            <Contact></Contact>
        </div>
    );
};

export default Home;