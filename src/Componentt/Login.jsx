import { useState } from "react";
import './Sinup.css'
import { json, useNavigate } from "react-router-dom";
export default function Login() {

    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const Navigate=useNavigate();

    async function handleSubmit(e) {
       e.preventDefault();
       let responce= await fetch('http://localhost:8080/login',{
        method:'POST',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-type':'application/json'
        }
       });

       responce= await responce.json();
      console.log(responce);
       if(responce.auth){
        localStorage.setItem('auth',JSON.stringify(responce.auth));
       
        Navigate('/')
       }
       else{
        alert("please enter a valid user")
       }

    }


    return (
        <div className="SinUp-container">
           <div className="sinup-content">
           <h2>Login</h2>
            <form onSubmit={handleSubmit} className="Sinup">
           
            <p>Email</p>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <p>Password</p>
                <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
             
             
                <button className="button">Submit</button>
            </form>
</div>
        </div>
    )

}