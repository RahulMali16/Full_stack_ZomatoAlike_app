import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import ExplorMenu from '../../components/ExplorMenu/ExplorMenu.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'
import AppDownload from '../../components/AppDownload/AppDownload.jsx'

const Home = () => {
    const [category, setcategory] = useState("All")
  return (
    <div className=''>
   <Header/>
   <ExplorMenu category={category} setcategory={setcategory}></ExplorMenu>
   <FoodDisplay category={category}></FoodDisplay>
   <AppDownload></AppDownload>
    </div>
  )
}

export default Home