import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register';
import useAuth from './custom-hooks/useAuth'

const App = () => {

  const { currentUser } = useAuth();

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={'/login'} />

  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={

              <RequireAuth>
                <Home />
              </RequireAuth>
            } />
          </Route>

          <Route index path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App