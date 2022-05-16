import styled from 'styled-components';

export const HeaderPage = styled.header`
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 70px;
    background-color: rgb(11, 13, 18);
`;

export const RowSearch = styled.form`
    box-sizing: border-box;
    min-width: 200px;
    max-width: 500px;
    height: auto;
    margin: auto;
    margin-top: 10px;
`; 

export const SearchField = styled.input`
    box-sizing: border-box;
    border: none;
    width: 100%;
    height: auto;
    padding: 7px;
    border-radius: 5px;
`;

export const ContainerGames = styled.div`
    box-sizing: border-box;
    width: 95%;
    height: auto;
    margin: auto;
    padding: 10px;
`;

export const SingleGame = styled.div`
    box-sizing: border-box;
    width: 150px;
    height: 270px;
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const GameThumbnail = styled.div`
    height: 70%;
    width: 100%;
    box-sizing: border-box;
`;

export const Img = styled.img`
    height: 100%;
    width: 100%;
`;

export const RowGameData = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 30%;
`;

export const GameData = styled.p`
    box-sizing: border-box;
    padding: 10px 0px 10px 0px;
    word-wrap: break-word;
    font-size: 16px;
    color: white;
    ${(type) => type === 'price' ?  'font-weight:bold;' : '' }
    font-family: 'Raleway', sans-serif;
`;

export const FooterPage = styled.footer`
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
    height: 50px;
    background-color: rgb(11, 13, 18);
    justify-content: space-between;
    display: flex;
    position: fixed;
    bottom: 0;
`;

export const FooterIcons = styled.p`
    width: 50px;
    box-sizing: border-box;
    padding: 5px;
    color: white;
    font-size: 23px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
`;

export const Paragraph = styled.p`
    box-sizing: border-box;
    padding: 10px 0px 10px 0px;
    width: 100%;
    font-size: 19px;
    cursor: auto;
    color: white;
    font-family: 'Raleway', sans-serif;
    ${({type}) => type === 'back' ? 'underline;' : 'none;' }
`;