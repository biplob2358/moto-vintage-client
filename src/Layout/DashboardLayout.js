import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className="drawer  drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 bg-slate-300 text-white">
                        {
                            isBuyer && <>
                                <li><Link to='/dashboard/myorder' className='font-bold  bg-blue-500 my-2 '>My Orders</Link></li>

                            </>
                        }


                        {

                            isSeller && <>
                                <li><Link to='/dashboard/addproduct' className='font-bold  bg-blue-500 my-2'>Add a Product</Link></li>
                                <li><Link to='/dashboard/myproduct' className='font-bold  bg-blue-500 my-2 '>My Product</Link></li>


                            </>

                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allbuyers' className='font-bold  bg-blue-500 my-2 '>All Buyers</Link></li>
                                <li><Link to='/dashboard/allseller' className='font-bold  bg-blue-500 my-2 '>All Sellers</Link></li>
                            </>

                        }





                    </ul>

                </div>
            </div>
            <Footer></Footer>


        </div>
    );
};

export default DashboardLayout;