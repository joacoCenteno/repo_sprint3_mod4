import React from 'react'
import { useCartContext } from '../contexts/CartContext'
import { useModalContext } from '../contexts/ModalContext'
import { useThemeContext } from '../contexts/ThemeContext'

const Navbar = () => {
    const {cart} = useCartContext()
    const {toggleModal} = useModalContext()
    const {isDark, toggleTheme} = useThemeContext()

  return (
    <>
        <nav className='flex justify-between px-10 md:px-30 pt-5'>
          <div className='flex items-center w-fit cursor-pointer' onClick={toggleTheme}> {isDark ? <i className='bi bi-brightness-high-fill text-2xl text-amber-200'></i> : <i className='bi bi-moon-stars-fill text-2xl'></i>} </div>
            <div className='flex items-center'><i className="bi bi-cup-straw text-5xl text-amber-200"></i><span className={`mt-2 font-black text-slate-600 ${ isDark&&"text-white" }`}>DRINKshop</span></div>
            <div className='flex items-center cursor-pointer' onClick={toggleModal}>
                <div className='bg-amber-200 text-white text-center w-6 h-6 rounded-full'>{cart.length}</div>
                <i className="bi bi-cart-fill text-2xl ml-1 text-amber-200"></i>
            </div>
        </nav>
    </>
  )
}

export default Navbar