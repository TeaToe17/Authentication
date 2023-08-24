import React from "react";
import {UseAuth} from "./Auth"
import {useNavigate} from "react-router-dom"

const Dashboard = () => {
    const auth = UseAuth()
    const navigate = useNavigate()
    const handLogout = () => {
        auth.logout()
        navigate("/")
    }
    return (
        <div>
            <h1>{auth.user} Dashboard </h1>
            <button onClick={handLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;