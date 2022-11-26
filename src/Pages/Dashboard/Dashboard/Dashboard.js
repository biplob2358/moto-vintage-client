import React from 'react';
import dashboardImg from '../../../Assets/Banner/dashboard.png'

const Dashboard = () => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">

                <figure><img className='w-full max-h-screen ' src={dashboardImg} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default Dashboard;