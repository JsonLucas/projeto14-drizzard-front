import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
    Fields, 
    HomeLink, 
    MainForm, 
    StyledForm, 
    StyledLogin, 
    TitlePage } from '../../assets/styled/Forms/StyledSectionForms.js';
import signUpRequest from '../../utils/signUpRequest.js';

export default function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    async function signUp(e){
        e.preventDefault(); 
        if(password === confirmPass){
            const body = {
                name,
                email, 
                password
            };
            try{
                setDisabled(true);
                const response = await signUpRequest(body);
                if(response.status < 400){
                    alert('cadastro efetuado com sucesso!');
                    navigate('/');
                }else{
                    if(response.data){
                        alert(response.data);
                    }else{
                        alert('algum erro ocorreu.');
                    }
                }
            }catch(e){
                console.log(e.message);
            }
            setDisabled(false);
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPass('');
        }else{
            alert('as senhas devem ser iguais.');
        }
    }
    return(
        <StyledLogin>
            <StyledForm>
                <TitlePage>Drizzard</TitlePage>
                <MainForm className='main-form' onSubmit={signUp}>
                    <Fields value={name} type='text' placeholder='Nome' required onChange={(e) => {
                        setName(e.target.value);
                    }} disabled={disabled} />
                    <Fields value={email} type="email" placeholder='Email' required onChange={(e) => {
                        setEmail(e.target.value);
                    }} disabled={disabled} />
                    <Fields value={password} type="password" placeholder='Senha' required onChange={(e) => {
                        setPassword(e.target.value);
                    }} disabled={disabled} />
                    <Fields value={confirmPass} type="password" placeholder='Confirmar senha' required 
                    onChange={(e) => { setConfirmPass(e.target.value); }} />
                    <Fields isButton={true} type="submit" value='Cadastrar' />
                </MainForm> 
                <Link to={`/`}>
                   <HomeLink>Já tem uma conta? Faça login!</HomeLink>
                </Link>
            </StyledForm>
        </StyledLogin>
    )
}
