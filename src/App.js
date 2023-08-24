import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import {UseAuth,AuthProvider} from "./components/Auth";
import Dashboard from "./components/Dashboard";
import AuthWrapper from "./wrapper/AuthWrapper"
import Login from "./components/login"
import Head from "./components/Head"
import Secondboard from "./components/Private"


function App() {
    const auth = UseAuth()

  return (
    <div>

        <AuthProvider>
          <Routes>
          <Route path="/dashboard" element = {<AuthWrapper condition ={auth} children={<Dashboard/>}/>}/>
          <Route path="/login" element = {<Login/>} />
          <Route path="/private" element = {<AuthWrapper condition/>}/>
        </Routes>
        </AuthProvider>

    </div>
  );
}
export default App;
