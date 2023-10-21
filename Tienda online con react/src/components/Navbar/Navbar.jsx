import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ShoppingCartContext } from '../../context'

const Navbar = () => {

  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  const menuL = [
    { id: 1, to: '/', text: 'Shopi', className: 'font-semibold text-lg' },
    { id: 2, to: '/', text: 'All', className: '' },
    { id: 3, to: '/clothes', text: 'Clothes', className: '' },
    { id: 4, to: '/electronics', text: 'Electronics', className: '' },
    { id: 5, to: '/furitures', text: 'Furitures', className: '' },
    { id: 6, to: '/toys', text: 'Toys', className: '' },
    { id: 7, to: '/others', text: 'Others', className: '' },
  ];

  const menuR = [
    { id: 1, to: '/my-orders', text: 'My Orders', className: '' },
    { id: 2, to: '/my-account', text: 'My Account', className: '' },
    { id: 3, to: '/sign-in', text: 'Sign in', className: '' },
  ]

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3 '>

        {
          menuL.map((l) => (
            <li key={l.id} className={l.className}>
              <NavLink
                to={l.to}
                className={({ isActive }) => isActive ? activeStyle : undefined}
              >{l.text}
              </NavLink>
            </li>

          ))
        }

      </ul>

      <ul className='flex items-center gap-3'>
        <li>
          juanpabloruko@gmail.com
        </li>
        {menuR.map((l) => (
          <li key={l.id}>
            <NavLink to={l.to}>{l.text}</NavLink>
          </li>
        ))}
        <li className='flex items-center gap-2'><AiOutlineShoppingCart />{context.contador}</li>
      </ul>
    </nav>
  )
}

export default Navbar