import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const OrderCard = props => {

    const { id, title, imageUrl, price } = props;
    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light '>{title}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-lg font-medium'>${price}</p>
                <AiOutlineClose className="cursor-pointer" />

            </div>

        </div>
    )
}

export default OrderCard
