import React from 'react'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useThemeContext } from '../contexts/ThemeContext'

const Home = () => {
  const {isDark} = useThemeContext()
  return (
    <>  
      <div className={`relative min-h-screen ${isDark&&"dark:bg-black"} transition-all`}>
        <Navbar/>
        <ProductList/>
        <Cart/>
        <Footer/>
      </div>

    </>
  )
}

export default Home