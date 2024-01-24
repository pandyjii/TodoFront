
import { useState, useEffect } from 'react';
import './TodoUi.css';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
export default function TodoUi() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [values, setvalues] = useState([])
    const Navigate = useNavigate();
    const [editable, setEditable] = useState();
    let auth = JSON.parse(localStorage.getItem('auth'));
    useEffect(() => {
        getTodoDetails();
    }, [])


    async function handleinputSubmit(e) {

        e.preventDefault();
        let responce = await fetch('http://localhost:8080/', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        responce = await responce.json();
        console.log(responce);

        getTodoDetails()


        setFirstName('')
        setLastName('')

    }





    async function getTodoDetails() {
        let responce = await fetch('http://localhost:8080/');

        responce = await responce.json();
        if (responce) {
            setvalues(responce);
        }


    }

    async function handleDelete(id) {
        let responce = await fetch(`http://localhost:8080/${id}`, {
            method: 'DELETE'
        });
        responce = await responce.json();
        console.log(responce);
        getTodoDetails();
    }






    async function handleChange(e) {
        getTodoDetails();
        let key = e.target.value;
        let responce = await fetch(`http://localhost:8080/search/${key}`);
        responce = await responce.json();

        console.log(responce);

        if (responce) {
            setvalues([responce])
        }
        else {
            alert("data is not availbe")
        }
    }




















    return (

        <>
            
            {
                auth ?
         <div className='search'>
            <input type="text" style={{ width: "400px" }} className='search-input' placeholder='Search' onChange={(e) => handleChange(e)} />
        </div>
        :'' 
            }

<div className="container">
    {
        auth ?
            <div className="todoUi">


                <h1>Todo App</h1>

                <form className="formUi" onSubmit={handleinputSubmit}>
                    <input type="text" placeholder='FirstName' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder='LastName' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} />

                    <button className='todobutton'  >Submit</button>

                </form>
            </div>
            : ''
    }


    {
        auth ?
            values.map((item, index) =>

                <div className="showtodo" key={index} >

                    <h4 className="firstname">{item.firstName}</h4>
                    <h4 className="lastname">{item.lastName}</h4>
                    <div className="shotodo-icon">
                        <Link to={'/edit/' + item._id}   > <p className="icons"><i class="fa-solid fa-pen"  ></i></p></Link>
                        <p><i class="fa-solid fa-trash" onClick={() => handleDelete(item._id)}></i></p>

                    </div>

                </div>




            )
            : ''

    }





</div>


</>

    )
}

