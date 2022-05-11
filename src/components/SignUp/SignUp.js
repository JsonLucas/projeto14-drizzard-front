import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Fields, HomeLink, MainForm, StyledForm, StyledLogin, TitlePage } 
from '../../assets/styled/Forms/StyledSectionForms.js';

export default function SignUp(){
    return(
        <StyledLogin>
            <StyledForm>
                <TitlePage>Drizzard</TitlePage>
                <MainForm className='main-form'>
                    <Fields type='text' placeholder='Nome' />
                    <Fields type="email" placeholder='Email' disabled={false}/>
                    <Fields type="password" placeholder='Senha' disabled={false}/>
                    <Fields type="password" placeholder='Confirmar senha' disabled={false}/>
                    <Fields isButton={true} type="submit" value='Entrar' disabled={false} />
                </MainForm> 
                
                <Link to={`/`}>
                   <HomeLink>Já tem uma conta? Faça login!</HomeLink>
                </Link>
            </StyledForm>
        </StyledLogin>
    )
}
