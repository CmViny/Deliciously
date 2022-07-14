import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Register = () => {

    const [email, setEmail] = useState("");         // Set email && password
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();         // Pour la redirection

    const connected= (e) => {
        e.preventDefault();
        let request = {             // Datas envoyé via axios
            email : email,
            password : password
        }
        axios.post("http://localhost:8080/register", request)  // Post sur le server via l'API
        .then( resp => {
            alert(resp.data.message)
            if (resp.data.status === 200) {     // Redirection si success
                navigate('/login');
            } else {
                navigate('/register');
            }
        })
        .catch( err => {
            alert(err.data.message);        // Message d'erreur
        })
    }

    return (
        <div className='container'>
            <section>
                <form onSubmit={(e) => connected(e)}>     
                    <h1 className='Sign'>Sign Up</h1>

                    <label htmlFor='email'>Email :</label>
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value= {email}
                        required
                    />

                    <label htmlFor='password'>Password :</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value= {password}
                        required
                    />
                    <button formMethod='submit'>Sign Up</button>
                    <p> <a href='/login' className='pSign'>Sign In</a> </p>
                </form>
            </section>
        </div>
    )
}

export default Register 