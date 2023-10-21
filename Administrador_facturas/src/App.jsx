import React from 'react'
import Navbar from './components/Navbar'
import FacturesHead from './components/FacturesHead'
import FacturesBody from './components/FacturesBody'
import { Route, Routes } from 'react-router-dom'
import InvoiceDetail from './pages/InvoiceDetail'

const App = () => {
  return (
    <div className='w-full h-screen flex'>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<FacturesHead />} />
          <Route path='/invoice/:id' element={<InvoiceDetail />} />

        </Route>
      </Routes>
      {/* <Navbar />
      <FacturesHead /> */}

    </div>
  )
}

export default App
