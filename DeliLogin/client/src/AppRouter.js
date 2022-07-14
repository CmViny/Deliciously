import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './components/HomePage'
import Login from "./components/Login"
import Register from "./components/Register"
import Profile from "./components/Profile"

// ROUTER 

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element= {<Login/>}/>
                <Route path="/register" element= {<Register/>}/>
                <Route path="/" element= {<HomePage/>}/>
                <Route path="/profile" element= {<Profile/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter