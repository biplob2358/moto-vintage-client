import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ bookBike }) => {
    const { name, resaleValue } = bookBike;
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10 drop-shadow-lg rounded'>
                        <input name='userName' type="text" value={user?.displayName} readOnly className="input input-bordered w-full " />
                        <input name='userEmail' type="email" value={user?.email} readOnly className="input input-bordered w-full " />
                        <input name='name' type="text" value={name} readOnly className="input input-bordered w-full " />
                        <input name='resaleValue' type="text" value={resaleValue} readOnly className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder='Enter Your Phone Number ' required className="input input-bordered w-full " />
                        <input name='location' type="text" placeholder='Enter Meeting Location' required className="input input-bordered w-full " />
                        <br />
                        <input className='btn btn-primary w-full max-w-xs mx-auto ' type="submit" value="Add to cart" />
                    </form>


                </div>
            </div>

        </>
    );
};

export default BookingModal;