import React, { useContext } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { ShoppingCartContext } from '../../context'

const Card = ({ data }) => {
    const context = useContext(ShoppingCartContext);

    const showProduct = (productdetail) => {
        context.openProductDetail();
        context.setProductToShow(productdetail);
        context.closeCheckoutSideMenu();
    }

    const handleAddCar = (event, productData) => {
        event.stopPropagation()
        context.setContador(context.contador + 1);
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu();
        context.closeProductDetail();

    }

    const renderIcon = (id) => {

        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if (isInCart) {
            return (
                <button className='w-6 h-6 m-2 p-1 absolute top-0 right-0 flex justify-center items-center bg-gray-400/60 text-white rounded-full '>
                    <AiOutlineCheck />
                </button>
            )
        } else {
            return (
                <button onClick={(event) => handleAddCar(event, data)} className='w-6 h-6 m-2 p-1 absolute top-0 right-0 flex justify-center items-center bg-white rounded-full '>
                    <AiOutlinePlus />
                </button>
            )
        }

    }

    return (
        <div onClick={() => showProduct(data)} className='bg-white cursor-pointer w-48 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='m-2 p-1 absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs'>
                    {data.category.name}
                </span>
                <img className='w-full h-full object-cover rounded-lg' src={data.images[0]} alt="Headphones" />
                {renderIcon(data.id)}
                <p className='flex justify-between items-center mt-2'>
                    <span className='text-sm font-light'>{data.title}</span>
                    <span className='text-lg font-medium'>${data.price}</span>
                </p>
            </figure>
        </div>
    )
}

export default Card