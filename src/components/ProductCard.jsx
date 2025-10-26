import React from 'react'
import { useCartContext } from '../contexts/CartContext'
import { useThemeContext } from '../contexts/ThemeContext';

const ProductCard = () => {
    const {products,addToCart, isInCart} = useCartContext();
    const {isDark} = useThemeContext()

    const handleClick = (element) => {
    if (!isInCart(element.id)) {
      addToCart(element);
    }
  };

  return (
    <>
        {products.map((element)=>{
            return(
            <div key={element.id} className={`mt-4 w-60 ${isDark ? "text-white" : "text-slate-600"}  items-center text-center   ${isInCart(element.id) ? "opacity-50 cursor-auto" : "hover:opacity-85 cursor-pointer"}`} onClick={()=>{handleClick(element)}}>
                <div className='rounded-t-lg flex justify-center py-2 bg-gray-200 h-45'>
                <img src={element.img} className='w-40' alt="" />                    
                </div>
                <div className='border-gray-300 border-b border-l border-r rounded-b-lg py-2'>
                    <p className='font-medium '> 
                        {element.name}
                    </p>
                    <p >${element.price}</p>                    
                </div>

            </div>
            )
        })}

    
    </>
  )
}

export default ProductCard