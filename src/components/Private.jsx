import React from "react";
import {UseAuth} from "./Auth"
import { useNavigate } from "react-router-dom";

const Private = () => {
    const auth = UseAuth()
    const navigate = useNavigate()    
    const handLogout = () => {
        auth.logout()
        navigate("/")
    }

    return(
        <div>
            <h1>{auth.user}</h1>
            <button onClick= {handLogout}></button>
        </div>
 )
}