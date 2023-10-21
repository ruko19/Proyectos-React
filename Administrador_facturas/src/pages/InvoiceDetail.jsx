import React from 'react'

const InvoiceDetail = () => {
    return (
        <div className='w-full h-screen '>
            <main className='max-w-5xl h-screen  mx-auto p-5'>

                <div className='flex justify-between bg-white items-center text-xl text-slate-400 p-6 rounded-lg'>
                    <div className='flex items-center gap-9'>
                        <p>Status</p>
                        <span className='bg-green-300/40 text-green-800 rounded-md p-2'>. paid</span>
                    </div>
                    <div className='flex  gap-5'>
                        <button className='text-purple-300 bg-slate-300/30 px-5 rounded-full'>
                            Edit
                        </button>
                        <button className='bg-red-500 rounded-full py-3 px-5 text-slate-100'>
                            Delete
                        </button>
                        <button className='bg-purple-200/40 px-5 rounded-full'>
                            Mark as Paid
                        </button>
                    </div>

                </div>

                <div className='w-full bg-white p-5 text-slate-400 rounded-lg mt-7'>
                    <div className='flex justify-between'>
                        <div className=''>
                            <p className='font-semibold text-2xl text-black'>RT3080</p>
                            <p>Re-branding</p>
                        </div>
                        <div>
                            <p>106 Kendell Street,</p>
                            <p>Sharrington,</p>
                            <p>NR245WQ,</p>
                            <p>United Kingdom</p>
                        </div>
                    </div>
                    <div className='flex gap-40 mt-9  flex-wrap'>
                        <div className='flex flex-col gap-10'>
                            <div>
                                <p>Ivoice Date</p>
                                <p className='text-black font-semibold text-2xl'>2021-8-18</p>
                            </div>
                            <div>
                                <p>Payment Due</p>
                                <p className='text-black font-semibold text-2xl'>2021-8-19</p>
                            </div>
                        </div>
                        <div>
                            <p>Bill To</p>
                            <p className='text-black font-semibold text-2xl'>19 Union Terrace,</p>
                            <p>London,</p>
                            <p>El 3EZ,</p>
                            <p>United Kingdom</p>
                        </div>
                        <div>
                            <p>Send to</p>
                            <p className='text-black font-semibold text-2xl'>Jensenh@gmail.com</p>
                        </div>

                        <div className='flex-1 p-5'>
                            <table className='text-left w-full bg-slate-300'>
                                <thead>
                                    <tr>
                                        <th>item</th>
                                        <th>QTY:</th>
                                        <th>Price</th>
                                        <th>TOtal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-black font-semibold text-xl mt-10'>
                                        <td>Brand Guidelines</td>
                                        <td>1</td>
                                        <td>$1800.9</td>
                                        <td>$1800.9</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>



                </div>

            </main>




        </div>
    )
}

export default InvoiceDetail
