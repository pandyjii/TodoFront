import { Navigate, useNavigate, useParams } from 'react-router-dom';
import './Sinup.css'

import { useState, useEffect } from 'react';
export default function EditContent() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const Navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        getProductlist();
    }, [])


    async function getProductlist() {
        console.log(param.id);

        let responce = await fetch(`http://localhost:8080/product/${param.id}`)

        responce = await responce.json();

        console.log(responce);
        setFirstName(responce.firstName);
        setLastName(responce.lastName);

    }




    async function handleinputUpdate(e) {
        e.preventDefault();
        let responce = await fetch(`http://localhost:8080/${param.id}`, {
            method: 'PUT',
            body: JSON.stringify({ firstName, lastName }),
            headers: {
                'Content-type': 'application/json'
            }



        })
        responce = await responce.json();
        Navigate('/')
        console.log(responce);
    }









    return (
        <div className="container">
            <div className="todoUi">
                <h1>Todo App</h1>

                <form className="formUi" onSubmit={handleinputUpdate}>
                    <input type="text" placeholder='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <button className='todobutton'   >Update</button>
                </form>
            </div>
        </div>
    )
}