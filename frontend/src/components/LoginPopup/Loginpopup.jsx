import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/food del assets/frontend_assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Loginpopup = ({ setshowLogin }) => {
    const [currState, setcurrState] = useState("Sign Up")
    const [data, setdata] = useState({
        name:"",
        email:"",
        password:""
    })
    const {url,settoken,token} = useContext(StoreContext);

    const onLogin = async (event) =>{

          event.preventDefault(); 
          let newUrl = url;
          if(currState=="Login"){
            newUrl += "/api/user/login"
          }
          else{
            newUrl += "/api/user/register"
          }

          const response = await axios.post(newUrl,data)
          if(response.data.success){
            settoken(response.data.token);
            localStorage.setItem("token",response.data.token)
            setshowLogin(false);
         
          }
          else{
            alert(response.data.message);
          }

    }

    const onChangeHandler = (event) =>{
        const name = event.target.name
        const value = event.target.value

        setdata(data =>({...data,[name]:value}))
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick = {() => setshowLogin(false)} src={assets.cross_icon} alt="" />
                </div>

                <div className="login-popup-inputs">
                    {currState === "Login" ? <></> : <input type="text" name='name' onChange={onChangeHandler} value={data.name} placeholder='Your Name' required />}
                    <input name='email'onChange={onChangeHandler} value={data.email} type="text" placeholder='Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit' >{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">

                    <input type="checkbox" required />
                    <p>By continuing , i agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Sign Up" ? <p>Already have an account? <span onClick={()=>setcurrState("Login")}>Login here.</span></p> : <p>Create a new account..<span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
                }

            </form>
        </div>
    )
}

export default Loginpopup