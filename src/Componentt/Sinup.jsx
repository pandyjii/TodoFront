import { useState } from "react"
import './Sinup.css'
import { json, useNavigate } from "react-router-dom";
export default function Sinup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   const Navigate=useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        let responce=await fetch('http://localhost:8080/sinup',{
            method:'POST',
            body:JSON.stringify({name,email,password}),
           headers:{
            'Content-type':'application/json'
           }
        })
        responce= await responce.json();
        console.log(responce)
        if(responce.auth){
            Navigate('/login')
        }
        else{
            alert("please enter a valid input")
        }

        console.log(responce);
       
    }



    return (
        <div className="SinUp-container">
            <div className="sinup-content">
                <h2>SinUp</h2>
                <form  className="Sinup" onSubmit={handleSubmit}>
                <p>Name</p>
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <p>Email</p>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <p>Password</p>
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="button" >submit</button>
                </form>
            </div>
        </div>
    )
}