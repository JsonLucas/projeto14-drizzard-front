import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoadingContext from "./contexts/LoadingContext";
import UserContext from "./contexts/UserContext";

import Login from "./components/Login/Login";

import "./assets/css/reset.css";
import "./assets/css/fonts.css";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [loading,setLoading] = useState(false);
  const [user, setUser] = useState(null);

  return(
    <LoadingContext.Provider value={{loading,setLoading}}>
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route path="/signup" element={<SignUp />}/>
              <Route path="" element={<></>}/>
              <Route path="" element={<></>}/>  
              <Route path="" element={<></>}/>
            </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </LoadingContext.Provider>  
  )
}

export default App;
