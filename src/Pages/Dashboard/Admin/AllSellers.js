import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdVerified } from 'react-icons/md';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSellers = () => {
    const [deletingSeller, setDeletingSeller] = useState(null);
    const closeModal = () => {
        setDeletingSeller(null);
    }



    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('https://moto-vintage-server.vercel.app/allusers?role=seller');
            const data = await res.json();
            return data;
        }
    });

    const handleDeteletSeller = seller => {
        fetch(`https://moto-vintage-server.vercel.app/users/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Seller Deleted Successfully');
                }

            })
    }

    const handleVerified = (id, email) => {
        fetch(`https://moto-vintage-server.vercel.app/allusers/seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    fetch(`https://moto-vintage-server.vercel.app/allproducts?email=${email}`)

                        .then(res => res.json())
                        .then(data => {
                            toast.success('Seller Verified successful.')
                            refetch();

                        })

                }
            })

    }


    return (
        <div>
            <h2 className="text-3xl text-center my-4 font-bold">All Seller</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.role}</td>
                                <td>
                                    {
                                        seller?.isVerified ?
                                            <div><p className='flex items-center'>Verified <span className='text-green-600'> <MdVerified></MdVerified> </span></p> </div>
                                            : <button onClick={() => handleVerified(seller._id, seller.email)} className="btn  shadow-lg bg-green-400 btn-xs">make verified</button>

                                    } </td>
                                <td>  <label onClick={() => setDeletingSeller(seller)} htmlFor="confirmation-modal" className="btn  bg-red-400 btn-xs">Delete</label> </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingSeller && <ConfirmationModal
                    title={`Are You sure You to delete?`}
                    message={`If You delete ${deletingSeller.name} ,It can not be undo`}
                    closeModal={closeModal}
                    successButtonName="Delete"
                    modalData={deletingSeller}
                    successAction={handleDeteletSeller}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default AllSellers;