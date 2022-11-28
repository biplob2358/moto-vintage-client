import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const Report = () => {
    const [deleteItem, setDeleteItem] = useState(null)
    const closeModal = () => {
        setDeleteItem(null);
    }

    const { data: reported = [], refetch, isLoading } = useQuery({
        queryKey: ['reported'],
        queryFn: async () => {
            const res = await fetch('https://moto-vintage-server.vercel.app/report');
            const data = await res.json();
            return data;
        }
    });

    const handelDeleteItem = (report) => {
        fetch(`https://moto-vintage-server.vercel.app/report/${report._id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully Deleted')
                    refetch();
                }
            })
        console.log(report._id)


    }
    if (isLoading) {
        return <div className="w-16 h-16 my-32 border-8 border-dashed rounded-full animate-spin dark:border-slate-800 mx-auto"></div>
    }

    return (
        <div>
            <h2 className="text-3xl text-center my-4 font-bold">Reported Items {reported.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Bike Name</th>
                            <th>Price</th>
                            <th>Condition</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reported?.map((report, i) => <tr

                                key={report._id}>
                                <th>{i + 1}</th>
                                <td>{report.bikeName}</td>
                                <td>{report.resaleValue}</td>
                                <td>{report.condition}</td>
                                <td>  <label onClick={() => setDeleteItem(report)} htmlFor="confirmation-modal" className="btn  bg-red-400 btn-xs">Delete</label> </td>
                            </tr>)

                        }



                    </tbody>
                </table>
            </div>

            {
                deleteItem && <ConfirmationModal
                    title={`Are You sure You to delete?`}
                    message={`If You delete ${deleteItem.name} ,It can not be undo`}
                    closeModal={closeModal}
                    successButtonName="Delete"
                    modalData={deleteItem}
                    successAction={handelDeleteItem}
                >

                </ConfirmationModal>
            }

        </div>
    );
};

export default Report;