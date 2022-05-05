import React from 'react';
import Banner from '../Banner/Banner';
import NewArrival from '../NewArrival/NewArrival';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <NewArrival></NewArrival>
            <Products></Products>
        </>
    );
};

export default Home;