import React from "react";
import {Route, Routes} from 'react-router';
import { BrowserRouter } from "react-router-dom";


import Home from "../components/home/Home";
import UserCrud from "../components/User/UserCrud";
import App from "./App";

export default props => 


<BrowserRouter>
    <Routes>

    <Route path="/" element={<Home/>} />
    <Route path="/users" element={<UserCrud/>} />
    <Route path="*" element={<Home/>} />
    </Routes>
</BrowserRouter>

    
    
