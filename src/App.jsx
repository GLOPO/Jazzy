import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './layouts/NavBar'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import CheckOut from './pages/CheckOut'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import { useState } from 'react'
import Error from './pages/Error'

function App() {
  const [cartItem, setCartItem] = useState([1])

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={
            <>
              <NavBar cartItem = {cartItem}/> 
              <Footer />
            </>
          }>
            <Route path='/' element={<Home />}/>
            <Route path='/CheckOut' element={<CheckOut />}/>
          </Route>

          <Route path='/SignIn' element={<SignIn />}/>
          <Route path='/SignUp' element={<SignUp />}/>
          <Route path='*' element={<Error />}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
