import React from "react";
// import App from "./app.routes";

import { BrowserRouter } from "react-router-dom";
import Auth from "./auth.routes";


export const Routes: React.FC = () => (
        <BrowserRouter>
            <Auth />
            {/* <App /> */}
        </BrowserRouter>
    )

export default Routes
