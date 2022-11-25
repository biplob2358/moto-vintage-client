import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo/logo.jpg'
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logout successfull");
            })
            .catch(error => {
                toast.error(error);
            })
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>

        {user?.uid ?
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                < li > <p> {user.displayName}</p></li>
                < li > <button onClick={handleLogOut}>Logout</button></li>
            </>
            : < li > <Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div>
            <div className="navbar  bg-blue-100 ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='container flex justify-between mx-auto'>
                    <div className="navbar-start ">

                        <div className='flex justify-cente'>
                            <img className='w-16  rounded-xl mr-2' src={logo} alt="" />
                            <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold">Moto Vintage</Link>
                        </div>

                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal font-bold p-0">
                            {menuItems}
                        </ul>

                    </div>

                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>


                </div>
            </div>

        </div>
    );
};

export default Navbar;