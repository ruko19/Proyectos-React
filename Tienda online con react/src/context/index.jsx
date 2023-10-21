import { createContext, useState } from "react";

export const ShoppingCartContext = createContext()


export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart - Increment quantity
    const [contador, setContador] = useState(0);

    // Product Detail . open/Close
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false)
    const openProductDetail = () => { setisProductDetailOpen(true) }
    const closeProductDetail = () => { setisProductDetailOpen(false) }


    // Checkout Side Menu . open/Close
    const [isCheckoutSideMenuOpen, setisCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => { setisCheckoutSideMenuOpen(true) }
    const closeCheckoutSideMenu = () => { setisCheckoutSideMenuOpen(false) }



    // Product Detail Show Product
    const [productToShow, setProductToShow] = useState({})

    // ShoppinCart - AddProduct to Cart
    const [cartProducts, setCartProducts] = useState([])



    return (

        <ShoppingCartContext.Provider value={{
            contador,
            setContador,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            setCartProducts,
            cartProducts,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            isCheckoutSideMenuOpen,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}