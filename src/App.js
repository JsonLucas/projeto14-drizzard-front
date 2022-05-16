import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoadingContext from "./contexts/LoadingContext";
import UserContext from "./contexts/UserContext";

import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";
import SignUp from "./components/SignUp/SignUp";
import Cart from "./components/shoppingCart/Cart";
import ListGames from "./components/ListGames/ListGames";

import "./assets/css/reset.css";
import "./assets/css/fonts.css";
import SingleGamePage from "./components/SingleGamePage/SingleGamePage";

function App() {
  const [loading,setLoading] = useState(false);
  const [user, setUser] = useState(null);

  return(
    <LoadingContext.Provider value={{loading,setLoading}}>
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<ListGames />}/>
                <Route path='/game/:_id' element={<SingleGamePage />} />
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>  
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="" element={<></>}/>
            </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </LoadingContext.Provider>  
  )
}

export default App;
