import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricing = [
        {
            id: 1, name: 'Free', price: 0,
            benefits: [
                'lifetime free',
                'unlimited deals',
                'fantastic deals',
                'crazy deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 9.99,
            benefits: [
                'everything free',
                'unlimited deals',
                'fantastic deals',
                'crazy deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 99.99,
            benefits: [
                'everything lifetime free',
                'unlimited deals',
                'fantastic deals',
                'crazy deals'
            ]
        },
        {
            id: 4, name: 'Custom', price: 999.9,
            benefits: [
                'everything lifetime free',
                'unlimited deals',
                'fantastic deals',
                'crazy deals'
            ]
        }
    ]
    return (
        <div className='bg-indigo-200 p-4 mt-8'>

            <h1 className='text-2xl font-semibold text-indigo-500 mb-5'>Best deals of the club</h1>

            <div className='grid md:grid-cols-4 gap-4'>
                {
                    pricing.map(option => <PricingOption option={option} ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;