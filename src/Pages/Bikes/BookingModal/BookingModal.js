import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ bookBike, setBookBike }) => {
    const { bikeName, resaleValue, _id, img } = bookBike;
    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const userEmail = form.email.value;
        const bikeName = form.bikeName.value;
        const resaleValue = form.resaleValue.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            bikeId: _id, img, userName, userEmail, bikeName, resaleValue, phone, location
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookBike(null);
                    toast.success('Booking successfull')
                }

            })


    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">{bikeName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10 drop-shadow-lg rounded'>
                        <input name='userName' type="text" value={user?.displayName} disabled className="input input-bordered w-full " />
                        <input name='email' type="email" value={user?.email} disabled className="input input-bordered w-full " />
                        <input name='bikeName' type="text" value={bikeName} disabled className="input input-bordered w-full " />
                        <input name='resaleValue' type="text" value={resaleValue} disabled className="input input-bordered w-full " />
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