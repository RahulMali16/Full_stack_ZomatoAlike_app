import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'

import Sidebar from './components/sidebar/Sidebar.jsx'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Orders from './pages/Orders/Orders.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const url = "http://localhost:4000"
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <hr />
      <div className="app-content">
        <Sidebar></Sidebar>
        <Routes>
          <Route path='/add' element={<Add  url = {url}></Add>}/>
          <Route path='/list' element={<List  url = {url}></List>}/>
          <Route path='/orders' element={<Orders  url = {url}></Orders>}/>

        </Routes>
      </div>
    </div>
  )
}

export default App