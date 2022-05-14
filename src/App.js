import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoadingContext from "./contexts/LoadingContext";
import UserContext from "./contexts/UserContext";

import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";

import "./assets/css/reset.css";
import "./assets/css/fonts.css";

function App() {
  const [loading,setLoading] = useState(false);
  const [user, setUser] = useState(null);

  return(
    <LoadingContext.Provider value={{loading,setLoading}}>
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<></>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/home" element={<></>}/>  
                <Route path="" element={<></>}/>
            </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </LoadingContext.Provider>  
  )
}

export default App;
