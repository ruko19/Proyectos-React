import { AiOutlineClose } from "react-icons/ai";
import React, { useContext } from 'react'
import { ShoppingCartContext } from "../../context";


const ProductDetail = () => {

    const context = useContext(ShoppingCartContext)


    return (

        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-screen  flex-col fixed bg-white right-0 top-[68px] border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6 '>
                <h2 className='font-normal text-xl'>Detail</h2>
                <div onClick={() => context.closeProductDetail()} className="cursor-pointer">
                    <AiOutlineClose />
                </div>
            </div>
            <figure className="px-6">
                <img src={context.productToShow.images && context.productToShow.images[0]} alt="" />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl mb-2 ">
                    ${context.productToShow.price}
                </span>
                <span className="font-medium text-xl ">
                    {context.productToShow.title}
                </span>
                <span className="font-light text-sm ">
                    {context.productToShow.description}
                </span>
            </p>
        </aside>
    )
}

export default ProductDetail
