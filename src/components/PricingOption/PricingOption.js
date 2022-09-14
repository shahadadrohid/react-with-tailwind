import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Benefits from '../Benefit/Benefits';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h4 className='bg-indigo-200 py-2 rounded font-semibold text-xl'>{name}</h4>
            <p>
                <span className='text-xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-left font-semibold'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefits benefit={benefit}></Benefits>)
                }
                <button className='text-xl font-semibold bg-green-400 flex justify-center items-center w-full rounded mt-7 text-white p-2 hover:bg-green-800 font-bold'>Buy Now <ArrowRightIcon className='w-6 h-6 ml-2' ></ArrowRightIcon> </button>
            </div>
        </div>
    );
};

export default PricingOption;