import React from 'react';
import styled from 'styled-components';

export default function CartGame(props){
    return(
        <GameListed>
            <img src={props.image}/>
            <div>
                <h2>{props.name}</h2>
                <h2>qtd: x</h2>
            </div>
            <h3>{props.price}</h3>
        </GameListed>    
    )
}

const GameListed=styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    font-family: 'Raleway', sans-serif;

    img{
        max-height:80px;
        width: 100px;
        object-fit: contain;
    }
    div{
        display: flex;
        flex-direction: column;
        width:100%;
        justify-content: space-between;

        h2{
            font-size: 12px;
            margin: 5px auto 5px 10px;
            color: #FFFFFF;
        }
    }
    h3{
        white-space: nowrap;
        font-size: 12px;
        color: #FFFFFF;
    }
`