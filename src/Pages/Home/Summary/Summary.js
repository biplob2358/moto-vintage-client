import React from 'react';
import CountUp from 'react-countup';
import { BiDollar } from 'react-icons/bi'
import { FcBusinessman } from 'react-icons/fc'
import { MdFeedback, MdProductionQuantityLimits } from 'react-icons/md'

const Summary = () => {

    return (
        <div className='mb-4 '>
            <div className='lg:text-4xl sm:text-xl underline text-blue-600 text-center mt-4 font-bold'>
                <h1 className="text-center my-6">Our Business Summary</h1>
            </div>
            <div className="stats stats-vertical  flex  shadow-xl w-full">

                <div className="stat flex flex-col items-center justify-center">
                    <div className="stat-title">Annual Revenue</div>
                    <div className="stat-value"><BiDollar></BiDollar></div>
                    <div className="stat-value"><CountUp end={8000} duration={3} /></div>

                    <div className="stat-desc">Jan 1st 2022 - Nov 1st 2022</div>
                </div>

                <div className="stat flex flex-col items-center justify-center">
                    <div className="stat-title">Total Customers</div>
                    <div className="stat-value"><FcBusinessman></FcBusinessman></div>
                    <div className="stat-value"><CountUp end={1200} duration={3} /></div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div className="stat flex flex-col items-center justify-center">
                    <div className="stat-title">Total Feedback</div>
                    <div className="stat-value"><MdFeedback></MdFeedback></div>
                    <div className="stat-value"><CountUp end={250} duration={3} /></div>
                    <div className="stat-desc">↗︎ 90 (26%)</div>
                </div>


                <div className="stat flex flex-col items-center justify-center">
                    <div className="stat-title">Products Sold</div>
                    <div className="stat-value"><MdProductionQuantityLimits></MdProductionQuantityLimits></div>
                    <div className="stat-value"><CountUp end={3500} duration={3} /></div>
                    <div className="stat-desc">↗︎ 1200(15%)</div>
                </div>

            </div>
        </div>
    );
};

export default Summary;