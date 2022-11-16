import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-sky-300 p-5'>
            <ul className='flex '>
                <li><Link to='/pageination' className='text-xl font-semibold mx-5'>PageInation</Link></li>
                <li><Link to='/hookform' className='text-xl font-semibold mx-5'>HooK Form</Link></li>
                <li><Link to='/users' className='text-xl font-semibold mx-5'>Users</Link></li>
                <li><Link to='/payment' className='text-xl font-semibold mx-5'>Payment</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;