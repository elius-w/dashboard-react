import React from "react";
import App from "./app.routes";

import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import Auth from "./auth.routes";


export const Routes: React.FC = () => {
    const {logged} = useAuth();

    return (
        <BrowserRouter>

          { logged ? <App/> : <Auth/> }
          
        </BrowserRouter>
    )
}

export default Routes
