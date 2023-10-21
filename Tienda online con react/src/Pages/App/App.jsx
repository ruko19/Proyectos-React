import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../context'
import { AppRoutes } from '../../routes'
import Navbar from '../../components/Navbar/Navbar'
import CheckoutSideMenu from '../../components/CheckoutSideMenu/CheckoutSideMenu'

const App = () => {
  return (

    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App