import React from 'react'
import Home from './pages/Home'
import { ModalProvider } from './contexts/ModalContext'
import { ThemeProvider } from './contexts/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <Home/>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App