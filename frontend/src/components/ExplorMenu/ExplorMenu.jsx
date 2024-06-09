import React from 'react'
import './Explormenu.css'
import { menu_list } from '../../assets/food del assets/frontend_assets/assets'

const ExplorMenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Choose from a dicerse menu featuring a delectable array of dishes crafted with the finest jus to satisfy your craving and elevate your dining experience , one delicious meal at a time.</p>
        <div className="explore-menu-list">
            {menu_list.map((items,index)=>{
                return (
                    <div key={index} onClick ={()=>setcategory(prev=>prev===items.menu_name?"All":items.menu_name)} className='explore-menu-list-item'>
                     <img className={category===items.menu_name?"active":""} src={items.menu_image}></img>
                     <p>{items.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr ></hr>
    </div>

  )
}

export default ExplorMenu;