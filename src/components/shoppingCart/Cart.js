import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Topo from '../Topo.js';
import CartGame from './CartGame.js';
import calcTotal from '../../utils/cartOperation.js';

export default function Cart(){
    const navigate = useNavigate()
    const selectedGames = JSON.parse(localStorage.getItem('cartData'));
    const orderPrice = calcTotal(selectedGames)
    return(
        <>
        <Topo/>
        <StyledCart>
            {selectedGames.length>=1?
            <StyledList>
                {selectedGames.map(game=><CartGame image={game.cartData.image} name={game.cartData.name} price={game.cartData.price}/>)}
            </StyledList>
            :<h2>Seu carrinho de compras está vazio</h2>}
        </StyledCart>
        <CartButton>
                <div className='totalPrice'>
                    <h2>Total:</h2>
                    <h2>{orderPrice}</h2>
                </div>
                <button className='proceed' onClick={()=>navigate('/checkout')}>
                        Continuar compra
                </button>
        </CartButton>
        </>
    )
}

const StyledCart=styled.div`
    box-sizing: border-box;
    background-color: #182334;
    position: fixed;
    top: 74px;
    bottom: 0;    
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    h2{
        font-family: 'Raleway', sans-serif;
        font-size: 14px;
    }
`
const StyledList=styled.div`
    position: absolute;
    top: 0;
    bottom: 100px;
    left: 0;
    right:0;
    display: inline;
    flex-wrap: wrap;
    padding: 20px 20px 0 20px;

    overflow-y: scroll;
    -ms-overflow-style: none;
    ::-webkit-scrollbar{
        display: none;
    }
`
const CartButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0B0D12;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;

    .proceed {
        font-family: 'Raleway', sans-serif;
        background-color: #48b9ff;
        width: 80%;
        margin: 6px 0;
        border: 1px solid #0b0d12;
        border-radius: 5px;
        font-size: 22px;
        height: 50px;
        color: #FFFFFF;
    }
    .totalPrice{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #0B0D12;
        position: absolute;
        bottom: 78px;
        width: 100%;
        height: 30px;

        h2{
            color: #FFFFFF;
            margin: 10px 20px auto 20px;
        }
    }
`
