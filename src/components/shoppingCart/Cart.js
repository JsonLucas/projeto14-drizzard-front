import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Topo from '../Topo.js';
import CartGame from './CartGame.js';

export default function Cart(){
    const navigate = useNavigate()
    const selectedGames = [{"_id":{"$oid":"627da0f664e21bdf0d3be273"},
    "name":"Grand Theft Auto V",
    "price":"19,15 R$",
    "image":"https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    "genres":["Action","Adventure"],
    "stock":{"$numberInt":"60"}},
    {"_id":{"$oid":"627da0f664e21bdf0d3be275"},
    "name":"Portal 2",
    "price":"32,66 R$",
    "image":"https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    "genres":["Shooter","Puzzle"],
    "stock":{"$numberInt":"49"}},
    {"_id":{"$oid":"627da0f664e21bdf0d3be277"},
    "name":"The Elder Scrolls V: Skyrim",
    "price":"19,93 R$",
    "image":"https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    "genres":["Action","RPG"],
    "stock":{"$numberInt":"42"}},
    {"_id":{"$oid":"627da0f664e21bdf0d3be273"},
    "name":"Grand Theft Auto V",
    "price":"19,15 R$",
    "image":"https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    "genres":["Action","Adventure"],
    "stock":{"$numberInt":"60"}},
    {"_id":{"$oid":"627da0f664e21bdf0d3be275"},
    "name":"Portal 2",
    "price":"32,66 R$",
    "image":"https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    "genres":["Shooter","Puzzle"],
    "stock":{"$numberInt":"49"}},
    {"_id":{"$oid":"627da0f664e21bdf0d3be277"},
    "name":"The Elder Scrolls V: Skyrim",
    "price":"19,93 R$",
    "image":"https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    "genres":["Action","RPG"],
    "stock":{"$numberInt":"42"}},{"_id":{"$oid":"627da0f664e21bdf0d3be273"},
    "name":"Grand Theft Auto V",
    "price":"19,15 R$",
    "image":"https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    "genres":["Action","Adventure"],
    "stock":{"$numberInt":"60"}},
    {"_id":{"$oid":"627da0f664e21bdf0d3be275"},
    "name":"Portal 2",
    "price":"32,66 R$",
    "image":"https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    "genres":["Shooter","Puzzle"],
    "stock":{"$numberInt":"49"}},
    {"_id":{"$oid":"627da0f664e21bdf0d3be277"},
    "name":"The Elder Scrolls V: Skyrim",
    "price":"19,93 R$",
    "image":"https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    "genres":["Action","RPG"],
    "stock":{"$numberInt":"42"}}
    ];
    return(
        <>
        <Topo/>
        <StyledCart>
            {selectedGames?
            <StyledList>
                {selectedGames.map(game=><CartGame image={game.image} name={game.name} price={game.price}/>)}
            </StyledList>
            :<h2>Seu carrinho de compras está vazio</h2>}
        </StyledCart>
        <CartButton>
                <div className='totalPrice'>
                    <h2>Total:</h2>
                    <h2>X</h2>
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
