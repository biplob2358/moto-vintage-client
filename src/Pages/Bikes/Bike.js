import React from 'react';
import { MdVerified } from 'react-icons/md';

const Bike = ({ bike, setBookBike }) => {
    const { bikeName, img, description, location, resaleValue, originalPrice, usedYears, condition,
        sellerName, isVerified, date } = bike;
    return (
        <section className='mx-auto'>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className=' h-96' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bikeName}
                    </h2>
                    <p><span className='font-bold mr-2'>Location:</span> {location}</p>
                    <p><span className='font-bold mr-2'>Condition:</span>{condition}</p>
                    <p><span className='font-bold mr-2'>Original Price:</span>{originalPrice} BDT</p>
                    <p><span className='font-bold mr-2'>Resale Price:</span>{resaleValue} BDT</p>
                    <p><span className='font-bold mr-2'>Used:</span>{usedYears} Year</p>
                    <div >
                        <div className='flex gap-4'><span className='font-bold'>Seller Name:</span>{sellerName}
                            {
                                isVerified ? <div className="tooltip flex items-center" data-tip="Verified Seller">
                                    <span className='text-green-500 '> <MdVerified></MdVerified></span>
                                </div> : <small></small>
                            }
                        </div>
                    </div>
                    <p><span className='font-bold mr-2'>Description:</span>{description} Year</p>
                    <small><span className='text-yellow-500'>Posted date:</span> {date?.slice(0, 10)}</small>
                </div>
                <label
                    htmlFor="booking-modal"
                    className="btn btn-primary  mx-24 mb-8"
                    onClick={() => setBookBike(bike)}
                >Book Now</label>
            </div>

        </section>
    );
};

export default Bike;