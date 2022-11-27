import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { MdVerified } from 'react-icons/md';
import { AuthContext } from '../../contexts/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

const Bike = ({ bike, setBookBike }) => {
    const { bikeName, img, description, location, resaleValue, originalPrice, usedYears, condition,
        sellerName, isVerified, date, purchaseYear, soldOut } = bike;
    const { user } = useContext(AuthContext)

    const [isBuyer] = useBuyer(user?.email)

    const handleReport = (bike) => {
        fetch(`http://localhost:5000/report/${bike._id}`)
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Reported Successfully')
                }
            })

    }

    return (

        <>
            {
                !soldOut &&
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
                            <p><span className='font-bold mr-2'>Purchase Year:</span>{purchaseYear ? purchaseYear : <span className='text-red-500'>Not Found</span>} </p>
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
                            <p><span className='font-bold mr-2'>Description:</span>{description}</p>
                            <small><span className='text-yellow-500'>Posted date:</span> {date?.slice(0, 10)}</small>
                        </div>

                        {
                            isBuyer ? <>
                                <div className='grid grid-cols-2 mb-8  content-center justify-items-end'>
                                    <div className=' items-center '>
                                        <label
                                            htmlFor="booking-modal"
                                            className="btn btn-primary w-52 "
                                            onClick={() => setBookBike(bike)}
                                        >Book Now</label>
                                    </div>
                                    <div className='items-center'>
                                        <label
                                            className="btn btn-sm mr-4 bg-red-700 shadow-2xl  mt-4 w-36"
                                            onClick={() => handleReport(bike)}
                                        >Report to admin</label>
                                    </div>
                                </div>
                            </> :
                                <>
                                    <div className="tooltip " data-tip="Only Buyer can book ">
                                        <button disabled className='btn btn-primary w-96 mx-auto mb-4 '>Book Now</button>
                                    </div>
                                </>
                        }

                    </div>

                </section>
            }

        </>

    );
};

export default Bike;