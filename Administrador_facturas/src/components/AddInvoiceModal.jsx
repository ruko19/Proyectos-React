import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AiFillDelete } from "react-icons/ai";

const AddInvoiceModal = ({ visible, onClose }) => {

    const newItem = {
        name: '',
        quantity: 0,
        price: 0,
        total: 0
    }

    const [items, setitems] = useState([])

    // add product item
    const addItem = () => {
        setitems([...items, newItem])
    }

    const handlerChange = (e, i) => {
        const { name, value } = e.target
        const list = [...items];
        list[i][name] = value
        list[i]['total'] = list[i]['quantity'] * list[i]['price']
        setitems(list);
    }
    // Delete PRoduct item

    const deleteItem = (i) => {

        const inputData = [...items];

        inputData.splice(i, 1)
        setitems(inputData);

    }
    if (!visible) return null;
    const handleOnclose = (e) => {

        onClose();
    }

    return (
        <div onClick={(e) => handleOnclose(e)} className='fixed  inset-0 bg-gray-500 bg-opacity-70 backdrop-blur-sm flex justify-center items-center' >
            <div onClick={(e) => e.stopPropagation()} className='overflow-scroll h-screen rounded-r-3xl fixed w-[60rem] bg-white top-0 bottom-0 left-0 ml-[90px] px-28 py-11'>
                {/* Bill from */}
                <h1 className=' text-[#7c5dfa] mb-4 font-semibold '>
                    Bill From
                </h1>
                <div className='grid grid-cols-3 space-y-4 text-slate-400 '>
                    <div className='flex flex-col col-span-3 '>
                        <label htmlFor="">
                            Street Address
                        </label>
                        <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" />
                    </div>
                    <div className='flex flex-col mr-4 col-span-1'>
                        <label htmlFor="">
                            City
                        </label>
                        <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" />
                    </div>
                    <div className='flex flex-col mr-4 col-span-1 '>
                        <label htmlFor="">
                            Post Code
                        </label>
                        <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" />
                    </div>
                    <div className='flex flex-col col-span-1'>
                        <label htmlFor="">
                            Country
                        </label>
                        <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" />
                    </div>

                </div>
                {/* Bill TO */}
                <h1 className=' text-[#7c5dfa] my-4 mt-10 font-semibold'>
                    Bill To
                </h1>
                <div className='grid grid-cols-3  text-slate-400 '>
                    <div className='flex flex-col col-span-3 mb-6 '>
                        <label htmlFor="">
                            Client´s Name
                        </label>
                        <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" />
                    </div>
                    <div className='flex flex-col col-span-3 mb-6 '>
                        <label htmlFor="">
                            Client´s Email
                        </label>
                        <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" />
                    </div>
                    <div className='flex flex-col col-span-3 mb-4'>
                        <label htmlFor="">
                            Street Address
                        </label>
                        <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" />
                    </div>
                    <div className='flex flex-col mr-4 col-span-1 '>
                        <label htmlFor="">
                            City
                        </label>
                        <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" />
                    </div>
                    <div className='flex flex-col mr-4 col-span-1 '>
                        <label htmlFor="">
                            Post Code
                        </label>
                        <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" />
                    </div>
                    <div className='flex flex-col mr-4 col-span-1 '>
                        <label htmlFor="">
                            Country
                        </label>
                        <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" />
                    </div>


                    <div className=' col-span-3 mt-10'>
                        <div className='grid grid-cols-4 gap-4'>
                            <div className='col-span-2 '>
                                <div className='flex flex-col'>
                                    <label htmlFor="">Invoice Date</label>
                                    <input className='py-2 px-4 border text-gray-300 outline-none rounded-lg select-status' type="date" />
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <div className='flex flex-col'>
                                    <label htmlFor="">Payment Terms</label>
                                    <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='col-span-3 mt-10'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Project Description</label>
                            <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" name="" id="" />
                        </div>
                    </div>

                </div>
                <div>
                    <h3 className=' text-[#7c5dfa] my-4 mt-10 font-semibold'>Item List</h3>
                    {
                        items?.map((item, i) => (
                            <div className='flex text-slate-400 gap-3 items-center ' key={i}>

                                <div>
                                    <p>
                                        Item Name
                                    </p>
                                    <input className='border p-2 outline-none border-gray-200 rounded-md' type="text" name='name' onChange={(e) => handlerChange(e, i)} />
                                </div>
                                <div>
                                    <p>
                                        QTY
                                    </p>
                                    <input className='border p-2 outline-none border-gray-200 rounded-md' type="number" name='quantity' onChange={(e) => handlerChange(e, i)} />
                                </div>
                                <div>
                                    <p>
                                        Price
                                    </p>
                                    <input className='border p-2 outline-none border-gray-200 rounded-md' type="number" name='price' onChange={(e) => handlerChange(e, i)} />
                                </div>
                                <div>
                                    <p>
                                        Total
                                    </p>
                                    <h4>${item.total}</h4>
                                </div>
                                <button className='text-red-600 text-2xl' onClick={() => deleteItem(i)}><AiFillDelete /></button>
                            </div>
                        ))
                    }
                </div>
                <div className='text-slate-500 '>
                    <button onClick={addItem} className='w-full py-3 px-6  bg-slate-500/60 rounded-full text-gray-200 mt-10' >Add New Item</button>
                    <div className='flex  justify-between mt-4'>
                        <button>Dicard</button>
                        <div className='flex gap-6'>
                            <button className='bg-slate-300 px-4 py-2 rounded-full'>Save as Draft</button>
                            <button className='bg-gray-300 px-4 py-2 rounded-full'>Send & Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddInvoiceModal
