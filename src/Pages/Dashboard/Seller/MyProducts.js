import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyProducts = () => {

    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null);
    }




    const { user } = useContext(AuthContext);
    const { data: bikes = [], refetch } = useQuery({
        queryKey: ['bikes'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/product?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeteletSeller = bike => {
        fetch(`http://localhost:5000/products/${bike._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Bike Deleted Successfully');
                }

            })
    }
    return (
        <div>
            <h2 className="text-3xl text-center my-4 font-bold">My Product</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Condition</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            bikes.map((bike, i) => <tr key={bike._id}>
                                <th>{i + 1}</th>
                                <td>{bike.bikeName}</td>
                                <td>{bike.resaleValue}</td>
                                <td>{bike.condition}</td>
                                <td>
                                    {
                                        bike?.soldOut ? <p>Sold Out</p>
                                            : <>
                                                <div className='flex '>
                                                    <p className='mr-4'>Available</p>
                                                    <button className="btn shadow-lg bg-green-400 btn-xs">Advertise</button>
                                                </div>
                                            </>
                                    }
                                </td>
                                <td> <label onClick={() => setDeletingProduct(bike)} htmlFor="confirmation-modal" className="btn  bg-red-400 btn-xs">Delete</label> </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are You sure You to delete?`}
                    message={`If You delete ${deletingProduct.bikeName} ,It can not be undo`}
                    closeModal={closeModal}
                    successButtonName="Delete"
                    modalData={deletingProduct}
                    successAction={handleDeteletSeller}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;