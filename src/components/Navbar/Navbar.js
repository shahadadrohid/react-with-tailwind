import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/shop' },
        { id: 3, name: 'Deals', link: '/deals' },
        { id: 4, name: 'Coupons', link: '/coupons' },
        { id: 5, name: 'Contact', link: '/contact' }
    ]
    return (
        <nav className='bg-indigo-200'>
            <div onClick={() => setOpen(!open)} className='w-8 h-8 md:hidden'>
                {open ? <XMarkIcon></XMarkIcon> : <Bars3BottomLeftIcon></Bars3BottomLeftIcon>}
            </div>
            <ul className={`md:flex justify-center bg-indigo-200 w-full absolute md:static duration-700 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;