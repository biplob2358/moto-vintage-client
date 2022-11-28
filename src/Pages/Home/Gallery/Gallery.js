import React from 'react';
import img1 from '../../../Assets/Gallery/Honda CB150X.jpg'
import img2 from '../../../Assets/Gallery/honda x.jpg'
import img3 from '../../../Assets/Gallery/honda-cbr-150-r-motor-cbr150r-dealer-motor.png'
import img4 from '../../../Assets/Gallery/oyal-enfield-classic-350.jpg'
import img5 from '../../../Assets/Gallery//hornet.jpg'


const Gallery = () => {
    return (

        <div >
            <div className='lg:text-4xl sm:text-xl underline text-blue-600 text-center mt-4 font-bold'>
                <h1 className="text-center my-6">Photo Gallery</h1>
            </div>

            <section className="py-6 dark:bg-gray-800 dark:text-gray-50  border shadow-lg ">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src={img1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img2} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img3} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img4} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img5} />

                </div>
            </section>

        </div>
    );
};

export default Gallery;