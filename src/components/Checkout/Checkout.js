import React, { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Topo from '../Topo.js';
import LoadingContext from '../../contexts/LoadingContext.js';

export default function Checkout(){
    const { loading, setLoading } = useContext(LoadingContext);

    const[cep,setCep] = useState('');
    const[nome,setNome] = useState('');
    const[cartao,setCartao] = useState('');
    const[codSeg,setCodSeg]= useState('');
    const[validade,setValidade] = useState('');

    const[consulta,setConsulta] = useState(false);

    const[endereco, setEndereco]=useState('');
    const[localidade,setLocalidade] = useState('');
    const[uf,setUf] = useState('');
    const[complemento,setComplemento] = useState('');
    const[numeroRua,setNumeroRua] = useState('');

    function requestCep(event){
        event.preventDefault();
        setLoading(true);
        console.log(cep)
        const promise = axios.get(
            `https://viacep.com.br/ws/${cep}/json/`,
            {}
        );
        promise.then((response)=>{
            console.log(response)
            if(!response.data.erro){
                setLocalidade(response.data.localidade);
                setEndereco(`${response.data.logradouro}, ${response.data.bairro}`);
                setUf(response.data.uf);
                setConsulta(true);
            }else{
                alert("utilize um Cep válido")
            };

            setLoading(false);
        });
        promise.catch((error)=>{
            console.log(error.response)
            setLoading(false);
        });
    };

    function requestOrder(event){
        event.preventDefault();
        const localEnvio={
            endereco: `${endereco}, ${numeroRua}`,
            cidade: `${localidade}, ${uf}`,
            complemento,
        }
        const dadosPagamento={
            cartao,
            codSeg,
            nome,
            validade,
        }
        if(!endereco || !localidade|| !uf || !cartao || !codSeg || !nome || !validade){
            alert("preencha todos os campos");
        }else{
            console.log(localEnvio,dadosPagamento)    
        }
    }

    return(
        <>
        <Topo/>
        <StyledCheckout>
            <StyledForm>
                {consulta?
                    <form className='checkOutForm cepResult' onSubmit={loading?()=>{}:(event)=>{event.preventDefault();setConsulta(false)}}>
                        <h2>Endereço de entrega</h2>
                        <input type="text" value={endereco} disabled={consulta}/>
                        <input type="text" value={localidade} id='inputLocalidade' disabled={consulta}/>
                        <input type="text" value={uf} id='inputUf' disabled={consulta}/>
                        <input type="number" value={numeroRua} id='inputNumero' placeholder='número' onChange={(e)=>setNumeroRua(e.target.value)}/>
                        <input type="text" value={complemento} id='inputComplemento' placeholder='complemento' onChange={(e)=>setComplemento(e.target.value)}/>
                        <input type="submit" value='mudar CEP' id='sendCep' disabled={loading}/>
                    </form>
                :                
                    <form className='checkOutForm' onSubmit={loading?()=>{}:requestCep}>
                        <h2>CEP</h2>
                        <input type="text" pattern="[0-9]{5}-[0-9]{3}" placeholder=' CEP (ex: 12345-678)'id='nCep' value={cep} onChange={(e)=>setCep(e.target.value)} disabled={loading}/>
                        <input type="submit" value='consultar Cep' id='sendCep' disabled={loading}/>
                    </form>
                }

                <h2>Forma de pagamento</h2>
                <form className='checkOutForm' onSubmit={loading?()=>{}:requestOrder}>
                    <input type="number" placeholder=' número do cartão' id='nCartao' value={cartao} onChange={(e)=>setCartao(e.target.value)} disabled={loading}/>
                    <input type="number" placeholder=' CSC' value={codSeg} id='codSeg' onChange={(e)=>setCodSeg(e.target.value)} disabled={loading}/>
                    <input type="string" placeholder=' nome' id='nomePedido' value={nome} onChange={(e)=>setNome(e.target.value)} disabled={loading}/>
                    <h2>Validade</h2>
                    <input type="month" value={validade} id='validadeCartao' min="2022-06" pattern="[0-9]{4}-[0-9]{2}" onChange={(e)=>setValidade(e.target.value)} disabled={loading}/>
                    <div className='sendOrder'><input type="submit" value='Concluir compra' id='sendOrder' disabled={loading}/></div>
                </form> 
            </StyledForm>
        </StyledCheckout>
        </>
    )
}


const StyledCheckout=styled.div`
    box-sizing: border-box;
    background-color: #182334;
    position: fixed;
    top: 74px;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start; 
`
const StyledForm=styled.div`
    text-align: center;
    flex-wrap: wrap;
    overflow-y: scroll;

    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    h2{
        text-align: start;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        color: #2E6CA4;
        margin: 5px auto 5px 10%;
        align-text: start;
    }
    .checkOutForm{
        box-sizing: border-box;
        display: inline;
        margin-bottom: 15px;
    }
    .checkOutForm input{
        width: 80%;
        height: 30px;
        margin: 6px 0;
        border: 1px solid #0b0d12;
        border-radius: 5px;
        font-size: 16px;
    }
    .checkOutForm ::placeholder{
        font-family: 'Raleway', sans-serif;
        color: gray;
    }
    #sendCep {
        font-family: 'Raleway', sans-serif;
        background-color: #48b9ff;
        margin-bottom: 15px;
        color: #FFFFFF;
    }
    .sendOrder{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0B0D12;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 80px;

        #sendOrder{
            font-family: 'Raleway', sans-serif;
            background-color: #48b9ff;
            font-size: 22px;
            height: 50px;
            color: #FFFFFF;
        }
    }
    .cepResult input:disabled{
        background-color: #d9d9d4;
    }
    #inputLocalidade, #inputNumero, #nCartao{
        margin-right: 10px; 
    }
    #inputUf, #inputLocalidade, #inputNumero, #inputComplemento{
        width: calc(40% - 10px);
    }
    #nCartao{
        width: calc(65% - 10px);
    }
    #codSeg{
        width: calc(15% - 10px);
    }
`