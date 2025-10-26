import React from 'react'
import ProductCard from './ProductCard'
import { useModalContext } from '../contexts/ModalContext'

const ProductList = () => {
  const  {isCartOpen} = useModalContext()

  return (
    <>
    <div className={`px-30  flex flex-wrap justify-center gap-7 transition-all duration-300 mt-5 ${isCartOpen ? "md:w-[calc(100%-24rem)]": "w-full"}`}>
      <ProductCard/>
    </div>

    </>
  )
}

export default ProductList