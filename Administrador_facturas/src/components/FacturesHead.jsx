import React, { useState } from 'react'
import { GrFormAdd } from "react-icons/gr";
import FacturesBody from './FacturesBody';
import AddInvoiceModal from './AddInvoiceModal';

const FacturesHead = () => {

    const [showModal, setShowModal] = useState(false);
    const handleOnclose = () => setShowModal(false);

    return (
        <header className='w-full flex flex-col items-center '>
            <div className='main__container'>
                <div className='w-full flex justify-between'>
                    <div>
                        <h1 className='text-5xl font-semibold'>Envoices</h1>
                        <p className='color-icon'>There are 7 total invoices</p>
                    </div>
                    <button onClick={() => setShowModal(true)} className='flex flex-row items-center justify-center gap-4 bg-purple-700/80 text-slate-200 px-2 rounded-[50px]'>
                        <div className='bg-white text-purple-700 rounded-full p-2 text-xl'>
                            <GrFormAdd />
                        </div>
                        <p className='text-xl'>New invoice</p>
                    </button>
                </div>
                <div>
                    <FacturesBody />
                </div>
            </div>


            <AddInvoiceModal onClose={handleOnclose} visible={showModal} />


        </header>
    )
}

export default FacturesHead
