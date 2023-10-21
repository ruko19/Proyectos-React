import React from 'react'

const FactureCard = () => {
    return (
        <div className='flex justify-between items-center mt-7 bg-white color-icon text-lg p-7 rounded-lg cursor-pointer'>
            <div className='flex gap-6'>
                <p># <span className='text-black font-semibold'>RT3080</span></p>
                <p>2021-8-18</p>
                <p>jensen Huang</p>
            </div>
            <div className='flex gap-7 items-center'>
                <p className='text-black font-semibold text-2xl'>$1800.9</p>
                <p className='text-lime-600 bg-green-500/10 rounded-lg px-2'><span>.</span>paid</p>


            </div>

        </div>
    )
}

export default FactureCard
