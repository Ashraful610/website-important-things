import React, { useEffect, useState } from 'react';
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const Users = () => {
    const [users , setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    },[users])
    return (
        <div className='p-5'>
            <div className='grid grid-cols-3 gap-5'>
                <DynamicTitle title='Upload user Img' />
                {
                    users?.map(user => 
                    <div key={user._id} className='bg-blue-400 text-white p-5'> 
                        <div className='flex justify-center'>
                            <img src={user.photo} alt=""className='w-[150px] h-[150px] rounded-full'/>
                        </div>
                        <div className='text-center text-2xl font-serif font-semibold'>
                            <h2>Name : {user.name}</h2>
                            <h2>Email : {user.email}</h2>
                        </div>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Users;