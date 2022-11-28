import React from 'react';
import banner from '../../../Assets/Banner/banner.jpg'

const Banner = () => {
    return (
        <div className="hero h-[500px] mt-8 rounded-xl" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">FIND THE RIGHT BIKE</h1>
                    <p className="mb-5">Ride as much or as little as you want. Just make sure to ride. That is what matters!</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;