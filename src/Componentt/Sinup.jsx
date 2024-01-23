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
        let responce=await fetch('https://todo-5v24.vercel.app/sinup',{
            method:'POST',
            body:JSON.stringify({name,email,password}),
            headers:{
           'Content-type':'application/json'
            }
        })
        responce= await responce.json();
        if(responce){
            localStorage.setItem('user',JSON.stringify(responce))
        }
        else{
            alert("please enter a valid input")
        }

        console.log(responce);
        Navigate('/login')
    }

    function handleClick(){
        console.log("you click this button")
    }


    return (
        <div className="SinUp-container">
            <div className="sinup-content">
                <h2>SinUp</h2>
                <form  className="Sinup">
                <p>Name</p>
                    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <p>Email</p>
                    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <p>Password</p>
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button className="button" onClick={handleClick}>submit</button>
                </form>
            </div>
        </div>
    )
}