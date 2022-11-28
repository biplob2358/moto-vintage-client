import React from 'react';
import dashboardImg from '../../../Assets/Banner/dashboard.png'
import useTitle from '../../../hooks/useTitle';

const Dashboard = () => {
    useTitle("Dashboard");
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">

                <figure><img className='w-full max-h-screen ' src={dashboardImg} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default Dashboard;