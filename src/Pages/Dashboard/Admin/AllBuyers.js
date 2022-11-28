import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllBuyers = () => {

    const [deletingBuyer, setDeletingBuyer] = useState(null);
    const closeModal = () => {
        setDeletingBuyer(null);
    }




    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch('https://moto-vintage-server.vercel.app/allusers?role=buyer');
            const data = await res.json();
            return data;
        }
    });
    const handleDeteletBuyer = buyer => {
        fetch(`https://moto-vintage-server.vercel.app/users/${buyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Seller Deleted Successfully');
                    refetch();

                }
            })
    }


    return (
        <div>
            <h2 className="text-3xl text-center my-4 font-bold">All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.role}</td>
                                <td>
                                    <label onClick={() => setDeletingBuyer(buyer)} htmlFor="confirmation-modal" className="btn  bg-red-400 btn-xs">Delete</label>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingBuyer && <ConfirmationModal
                    title={`Are You sure You to delete?`}
                    message={`If You delete ${deletingBuyer.name} ,It can not be undo`}
                    closeModal={closeModal}
                    successButtonName="Delete"
                    modalData={deletingBuyer}
                    successAction={handleDeteletBuyer}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default AllBuyers;