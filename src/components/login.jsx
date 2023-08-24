import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "./Auth";


const [user,setUser]= useState("")
const auth = UseAuth()
const navigate = useNavigate()

const loginData = () => {
  auth.login(user);
  navigate("private")


  return (
    <div>
      <form onSubmit={loginData}>
        Username:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} required />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default loginData

