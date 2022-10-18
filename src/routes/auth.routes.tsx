import React from "react";
import { Routes, Route } from "react-router-dom"
import SignIn from "../pages/SignIn";


const AuthRoutes: React.FC = () =>  (

    <SignIn>
        <Routes>
            <Route path="/" element={<SignIn/>} />    
        </Routes> 
    </SignIn>

 )

export default AuthRoutes;