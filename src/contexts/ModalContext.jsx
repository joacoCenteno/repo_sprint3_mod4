/* eslint-disable react-refresh/only-export-components */
import  {createContext, useContext, useState} from 'react'

export const ModalContext = createContext()

export const ModalProvider = ({children}) =>{
      const [isCartOpen, setIsCartOpen] = useState(false);

      const toggleModal = () =>{
        setIsCartOpen(!isCartOpen)
      }

      return(
        <ModalContext.Provider value={{isCartOpen, toggleModal}}>
            {children}
        </ModalContext.Provider>
      )
}


export const useModalContext = () => useContext(ModalContext)