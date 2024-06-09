import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route ,Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/LoginPopup/Loginpopup'
import Verifyone from './pages/Verify/Verifyone'
import MyOrders from './pages/MyOrders/MyOrders'



const App = () => {
  const [showLogin, setshowLogin] = useState(false)


  return (
    
    <>
    {showLogin?<Loginpopup setshowLogin={setshowLogin}></Loginpopup>:<></>}
      
      
      
    <div className='app'>
          <Navbar setshowLogin={setshowLogin}></Navbar>
          <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/cart' element ={<Cart/>}/>
            <Route path='/order' element ={<PlaceOrder/>}/>
            <Route path='/verify' element = {<Verifyone/>}/>
            <Route path='/myorders' element = {<MyOrders/>}/>
          </Routes>
    </div>

    <Footer></Footer>
      </>
  )
}

export default App