import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Fields, 
    HomeLink, 
    MainForm, 
    StyledForm, 
    StyledLogin, 
    TitlePage 
} from '../../assets/styled/Forms/StyledSectionForms.js';
import axios from 'axios';
import LoadingContext from '../../contexts/LoadingContext.js';
import UserContext from '../../contexts/UserContext.js';

export default function Login(){
    const { loading, setLoading } = useContext(LoadingContext);
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const navigate = useNavigate();

    useEffect(() => {
        try{
            const activeSession = JSON.parse(localStorage.getItem('loginSession'));
            if(activeSession){
                navigate('/');
            }
        }catch(e){
            console.log(e.message);
        }
    }, []);
    function requestLogin(event){
        event.preventDefault();
        setLoading(true);
        
        const promise = axios.post(
            "https://drizzard.herokuapp.com/login",
             {
                email: email,
                password: senha
            }
        );
        promise.then((response)=>{
            const { token } = response.data;
            localStorage.setItem('loginSession', JSON.stringify(token));
            setUser(response.data.username);
            setLoading(false);
            navigate("/");    
        });
        promise.catch((error)=>{
            console.log(error.response)
            setLoading(false);
        });    
    };

    return(
        <StyledLogin>
            <StyledForm>
                <TitlePage>Drizzard</TitlePage>
                <MainForm className='loginForm' onSubmit={loading?()=>{}:requestLogin}>
                    <Fields type="email" placeholder='Email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} disabled={loading}/>
                    <Fields type="password" placeholder='Senha' id='senha' value={senha} onChange={(e)=>setSenha(e.target.value)} disabled={loading}/>
                    <Fields isButton={true} type="submit" value='Entrar' id='sendLogin' disabled={loading}/>
                </MainForm> 
                
                <Link to={`/signup`}>
                   <HomeLink>Primeira vez? Cadastre-se!</HomeLink>
                </Link>
            </StyledForm>
        </StyledLogin>
    )
}