import React, { useContext } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { ShoppingCartContext } from "../../context";
import '../CheckoutSideMenu/styles.css'
import OrderCard from '../OrderCard/OrderCard';


const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)


    return (

        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu  flex-col fixed bg-white right-0 top-[68px] border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6 '>
                <h2 className='font-normal text-xl'>My Order</h2>
                <div onClick={() => context.closeCheckoutSideMenu()} className="cursor-pointer">
                    <AiOutlineClose />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
                {
                    context.cartProducts.map((product) => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}

                        />
                    ))
                }

            </div>

        </aside>
    )
}

export default CheckoutSideMenu
