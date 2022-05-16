import { FooterPage, FooterIcons } from "../assets/styled/ListGames/StyledListGames";
import { useState, useEffect } from 'react';
import logoutRequest from "../utils/logoutRequest";
import { Link } from "react-router-dom";
export default function Footer(){
    const [logged, setLogged] = useState(false);
    const [token, setToken] = useState('');
    useEffect(() => {
        try{
            const token = JSON.parse(localStorage.getItem('loginSession'));
            if(token){
                setLogged(true);
                setToken(token);
            }
        }catch(e){
            console.log(e.message);
        }
    }, []);
    async function logout(){
        try{
            const response = await logoutRequest({token});
            if(response.status < 400){
                setLogged(false);
                localStorage.removeItem('loginSession');
            }
            alert(response.data);
        }catch(e){
            console.log(e.message);
        }
    }
    return (
        <FooterPage>
            <FooterIcons><ion-icon name="bag-outline"></ion-icon></FooterIcons>
            <Link to='/cart'>
                <FooterIcons><ion-icon name="cart-outline"></ion-icon></FooterIcons>
            </Link>
            {!logged && <Link to='/login'><FooterIcons><ion-icon name="enter-outline"></ion-icon></FooterIcons></Link> }
            {logged && <FooterIcons><ion-icon name="exit-outline" onClick={logout}></ion-icon></FooterIcons>}
        </FooterPage>
    );
}