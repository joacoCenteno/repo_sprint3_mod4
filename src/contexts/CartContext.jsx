/* eslint-disable react-refresh/only-export-components */
import  {createContext, useContext, useEffect, useState} from 'react'
import { productData } from '../utils/productData';

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(()=>{
        return JSON.parse(localStorage.getItem('cart')) || []
    });

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
    },[cart]);

    const addToCart = (product) => {
        setCart((prevCart)=>{
            const existingProduct = prevCart.find((item)=> item.id === product.id);
            if(existingProduct){
                return prevCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
            }else{
                return [...prevCart, {...product, quantity:1}]
            }
        });
     };

    const removeFromCart = (id) => { 
        setCart((prevCart) => prevCart.filter((product)=> product.id !== id))
    }

    const updateQuantity = (id, quantity) =>{
        setCart((prevCart) =>
            prevCart.map((product) => product.id === id ? {...product, quantity: Math.max(1,quantity)} : product)
        )
    }

    const totalPrice = cart.reduce((total,product) => total + product.price * product.quantity, 0);

    const isInCart = (id) => cart.some(((p)=> id == p.id))

    const [products] = useState(productData)


    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQuantity, isInCart , totalPrice, products}}>
            {children}
        </CartContext.Provider>
    )
 }

 export const useCartContext = () => useContext(CartContext)