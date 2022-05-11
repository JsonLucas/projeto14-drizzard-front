import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import LoadingContext from '../../contexts/LoadingContext.js';
import UserContext from '../../contexts/UserContext.js';

export default function Login(){
    const { loading, setLoading } = useContext(LoadingContext);
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const navigate = useNavigate();

    function requestLogin(event){
        event.preventDefault();
        setLoading(true);
        
        const promise = axios.post(
            "http://localhost:5000/login",
             {
                email: email,
                password: senha
            }
        );
        promise.then((response)=>{
            setUser(response.data.username);
            setLoading(false);
            navigate("/registros");    
        });
        promise.catch((error)=>{
            console.log(error.response)
            setLoading(false);
        });    
    };

    return(
        <StyledLogin>
            <StyledForm>
                <h1>Drizzard</h1>
                <form className='loginForm' onSubmit={loading?()=>{}:requestLogin}>
                    <input type="email" placeholder='email'id='email' value={email} onChange={(e)=>setEmail(e.target.value)} disabled={loading}/>
                    <input type="password" placeholder='senha' id='senha' value={senha} onChange={(e)=>setSenha(e.target.value)} disabled={loading}/>
                    <input type="submit" value='Entrar' id='sendLogin' disabled={loading}/>
                </form> 
                
                <Link to={`/cadastro`}>
                   <h3>Primeira vez? Cadastre-se!</h3>
                </Link>
            </StyledForm>
        </StyledLogin>
    )
}

const StyledLogin=styled.div`
    box-sizing: border-box;
    background-color: #182334;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const StyledForm=styled.div`
    text-align: center;

    h1{
        font-family: 'BurningWrath', regular;
        font-size: 32px;
        color: #2E6CA4;
        margin-bottom: 15px;
    }
    .loginForm{
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .loginForm input{
        width: 100%;
        height: 45px;
        margin: 10px;
        border: 1px solid #0b0d12;
        border-radius: 5px;
        font-size: 21px;
    }
    .loginForm ::placeholder{
        padding: 0px 10px;
        font-family: 'Raleway', sans-serif;
        color: gray;
    }
    #sendLogin{
        font-family: 'Raleway', sans-serif;
        background-color: #48b9ff;
        color: #FFFFFF;
    }
    a{
        font-family: 'Raleway', sans-serif;
        color: #FFFFFF;
        text-decoration: none;
    }
`