import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const connected= (e) => {
        e.preventDefault();
        let request = {
            email : email,
            password : password
        }
        axios.post("http://localhost:8080/login", request)
        .then( resp => {
            alert(resp.data.message)
            if (resp.data.status === 200) {
                navigate('/profile');
            } else {
                navigate('/login');
            }
        })
        .catch( err => {
            alert(err.data.message);
        })
    }

    return (
        <div className='container'>
            <section>
                <form onSubmit={(e) => connected(e)}>
                    <h1 className='Sign'>Sign In</h1>

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
                    <button>Sign In</button>
                    <p> <a href='/register' className='pSign'>Sign Up</a> </p>
                </form>
            </section>
        </div>
    )
}

export default Login 