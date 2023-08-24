import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Loginpage = () => {
    const [pass, setPass] = useState("");
    const [Checkpass,setCheckpass] = useState(false);

    function test() {
        if (pass==1234) {
            setCheckpass(true);
        }else {setCheckpass(false)}
    }
    


  return (
    <div>
      
      <input type="passsword" onChange={(e) => setPass(e.target.value)} />
      <button onClick={test}>Check</button>

      {
        Checkpass? <h1><Navigate to= "/homepage"/></h1> : <Navigate to= "/loginpage"/>  
      }

    </div>
  );
};

export default Loginpage;
