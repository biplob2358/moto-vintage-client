import React from 'react';
import { MdVerified } from 'react-icons/md';

const Bike = (bike) => {
    const { _id, name, img, description, location, resaleValue, originalPrice, usedYears, condition,
        sellerName, isVerified } = bike.bike;
    console.log(bike)
    return (
        <div className='mx-auto'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className=' h-96' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p><span className='font-bold'>Location:</span>{location}</p>
                    <p><span className='font-bold'>Condition:</span>{condition}</p>
                    <p><span className='font-bold'>Original Price:</span>{originalPrice} BDT</p>
                    <p><span className='font-bold'>Resale Price:</span>{resaleValue} BDT</p>
                    <p><span className='font-bold'>Used:</span>{usedYears} Year</p>
                    <div >
                        <p className='flex gap-4'><span className='font-bold'>Seller Name:</span>{sellerName}
                            {
                                isVerified ? <div className="tooltip flex items-center" data-tip="Verified Seller">
                                    <span className='text-green-500 '> <MdVerified></MdVerified></span>
                                </div> : <small></small>
                            }
                        </p>
                    </div>
                    <p>{description}</p>
                </div>
                <button className='btn btn-primary  mx-24 mb-8'>Book Now</button>
            </div>

        </div>
    );
};

export default Bike;