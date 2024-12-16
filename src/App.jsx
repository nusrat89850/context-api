//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Shop from './components/shop'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'

function App() {
  //const [cart,setCart] = useState([]);

  return (
    <>
      {/*<Header cart={cart}/>
      <Routes>
        <Route path="/" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes> */}

<Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
