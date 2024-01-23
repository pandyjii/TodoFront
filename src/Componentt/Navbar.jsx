import { Link, useNavigate } from "react-router-dom";
import'./Sinup.css'
import { useEffect, useState } from "react";

export default function Navbar(){
//    const[value,setValue]=useState('')
    const[validate,useValidate]=useState(false)
    let auth=JSON.parse(localStorage.getItem('user'))
    console.log(auth)

  const Navigate=useNavigate();

    function handleSinOut(){
        console.log("hii")
        localStorage.clear()
        Navigate('/login')
       

    }

    
   
    

    return(
        <>
        {

            auth ? 
            <div className="navbar-content">
           {validate? <Link to={'/'}>TodoApp</Link>:''}
          <Link to={'/login'} onClick={handleSinOut} >Sinout</Link>
      
            </div>
            :
            <div className="navbar-content">
            <Link to={'/login'}>Login</Link>
            <Link to={'/sinup'}>SinUp</Link>
            
        </div>
        }
     
        </>   
            
    )
}