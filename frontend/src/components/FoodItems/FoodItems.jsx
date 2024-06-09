import React, { useContext, useState } from 'react'
import './FoodItems.css'
import { assets } from '../../assets/food del assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItems = ({ id, name, price, description, image}) => {
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
  // const [itemCount, setitemCount] = useState(0)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={url+"/images/"+image} alt="" />
        {
          !cartItems[id] ? <img className='add' onClick={() => {
            addToCart(id)
          }} src={assets.add_icon_white}></img>
            :<div className='food-item-counter'>
              <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green}></img>
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>

    </div>
  )
}

export default FoodItems