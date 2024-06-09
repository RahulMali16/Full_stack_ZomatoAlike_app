import React, { useContext } from 'react'
import './Navbar.css'
import { useState } from 'react'
import { assets } from '../../assets/food del assets/frontend_assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setshowLogin}) => {
    const [menu, setmenu] = useState("home");
    const {getTotalCartAmount,token,settoken} = useContext(StoreContext);
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem("token")
        settoken("");
        navigate("/")

    }
    return (
        <div className='navbar'>
<Link to='/'>
            <img src={assets.logo} alt="" className="logo" />
</Link>

            <ul className="navbar-menu">
                <li onClick={  ()=>{

                    setmenu("home")
                }
                } className={menu === "home" ? "active" : ""} >Home</li>
                <li onClick={ ()=>{

                    setmenu("menu")
                }
                } className={menu === "menu" ? "active" : ""} >Menu</li>
                <li onClick={ ()=>{

                    setmenu("mobile-app")
                }
                } className={menu === "mobile-app" ? "active" : ""} >Mobile-App</li>
                <li onClick={ ()=>{

                    setmenu("contact-us")
                }
                } className={menu === "contact-us" ? "active" : ""} >Contact-Us</li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                  <Link to='/cart'>
                    <img src={assets.basket_icon} alt="" />

                  </Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
               {!token? <button onClick={()=>{ 
                    setshowLogin(true);}}>Sign In</button>
                    :
                    <div className='navbar-profile'>
                    <img src={assets.profile_icon} alt="" />
                    <ul className='nav-profile-dropdown'>

                    <li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}> <img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    </ul>
                    </div>}
               
            </div>


        </div>
    )
}

export default Navbar