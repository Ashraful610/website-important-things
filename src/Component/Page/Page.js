import React from 'react';

const Page = ({item,items}) => {
    return (
        <tr>
            <th>{items?.indexOf(item) + 1}</th>
            <td>
              <img src={item?.img} className='w-[50px] h-[50px] rounded-full' alt="" />    
            </td>
            <td>
                <h2>{item?. name}</h2>
                <p>{item?.price}</p>
            </td>
            <td>
                <p>{item?.description}</p>
             </td>
        </tr>
    );
};

export default Page;