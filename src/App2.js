import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Loginpage from "./loginpage"
import HomePage from "./homepage";

function App2() {
  const receivedCond = true;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/homepage"
            element={
              <ProtectedRoute
                condition={receivedCond}
                noAccess={<Navigate to="/loginpage" />}
              >
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/loginpage" element= {<Loginpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App2;
