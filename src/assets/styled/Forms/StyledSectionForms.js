import styled from 'styled-components';

export const StyledLogin = styled.div`
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
`;

export const StyledForm = styled.div`
    text-align: center;
    .main-form::placeholder{
        padding: 0px 10px;
        font-family: 'Raleway', sans-serif;
        color: gray;
    }

    a{
        font-family: 'Raleway', sans-serif;
        color: #FFFFFF;
        text-decoration: none;
    }
`;

export const TitlePage = styled.h1`
    font-family: 'BurningWrath', regular;
    font-size: 32px;
    color: #2E6CA4;
    margin-bottom: 15px;
`;

export const MainForm = styled.form`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Fields = styled.input`
    width: 100%;
    height: 45px;
    margin: 10px;
    border: 1px solid #0b0d12;
    border-radius: 5px;
    font-size: 21px;
    ${({isButton}) => isButton 
    ?  `font-family: 'Raleway', sans-serif;
        background-color: #48b9ff;
        color: #FFFFFF;`
    : ''}
`;

export const HomeLink = styled.h3`
    font-family: 'Raleway', sans-serif;
    color: #FFFFFF;
    text-decoration: none;
`;