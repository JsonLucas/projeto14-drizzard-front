import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowUndoSharp } from 'react-ionicons'

export default function Topo(){
    const navigate = useNavigate();

    return(
        <StyledHeader>
            <ArrowUndoSharp
                className='backIcon'
                onClick={()=>{navigate('/home')}}
                color={'#434343'} 
                height="30px"
                width="30px"
            />
            <h1>Drizzard</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0B0D12;
    height: 75px;
    width:100%;

    .backIcon{
        position: fixed;
        left: 10px;
    }
    h1{
        justify-self: center;
        font-family: 'BurningWrath', regular;
        font-size: 32px;
        color: #2E6CA4;
        margin: auto;
    }
`