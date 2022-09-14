import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';


const Benefits = (props) => {
    return (
        <div>
            <p className='flex items-center'>
                <CheckCircleIcon className='w-4 h-4 text-green-400'></CheckCircleIcon>
                {props.benefit}
            </p>

        </div>
    );
};

export default Benefits;