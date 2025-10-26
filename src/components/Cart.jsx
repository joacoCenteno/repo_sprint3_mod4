import React from 'react'
import { useCartContext } from '../contexts/CartContext'
import { useModalContext } from '../contexts/ModalContext'
import { useThemeContext } from '../contexts/ThemeContext'

const Cart = () => {
    const {cart, removeFromCart, updateQuantity, totalPrice} = useCartContext()
    const {isCartOpen, toggleModal} = useModalContext()
    const {isDark} = useThemeContext()

  return (
    <>
        <div className={`fixed top-0 right-0 h-full w-100 ${isDark&&"dark:bg-black text-white"} bg-white shadow-2xl transform transition-transform duration-300 z-30 flex flex-col pb-3 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div>
              <i className="bi bi-x-square text-2xl text-amber-200 cursor-pointer p-2" onClick={toggleModal}></i>
                <h1 className='text-xl text-center'>{cart.length == 0 ? 'No hay productos' : 'Listado de productos'}</h1>
                 
            </div>

          <div className='flex-1 overflow-y-auto mt-5 pl-6'>
              {cart.map((item)=>{
                  return <div key={item.id} className=' w-90 flex justify-between mb-3 p-2'>
                    <div className='flex'>
                      <span className='font-medium'>{item.name}</span>
                      <div className='flex ml-5'>
                        <i className="bi bi-dash-circle text-red-500 cursor-pointer text-lg" onClick={()=>{updateQuantity(item.id,item.quantity-1)}}></i>
                        <p className='text-md mx-2'>{item.quantity}</p>
                        <i className="bi bi-plus-circle text-green-400 cursor-pointer text-lg" onClick={()=>{updateQuantity(item.id, item.quantity + 1)}}></i>                            
                      </div>
                  
                    </div>

                      <i class="bi bi-trash3-fill text-lg cursor-pointer text-red-400" onClick={()=>{removeFromCart(item.id)}}></i>
                      </div>
              })}            
          </div>

              <div className='flex justify-around'>
                  <h2 className='text-lg'><span className='text-xl font-bold'>TOTAL:</span> ${totalPrice.toFixed(2)}</h2>  
                  <button className='bg-amber-200 cursor-pointer px-3 py-1 rounded font-medium hover:bg-amber-300 transition-all'>Comprar</button>   
              </div>
            
        </div>
    </>

  )
}

export default Cart