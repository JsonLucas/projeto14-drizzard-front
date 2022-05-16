import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    padding: 10px;
    width: 97%;
    margin: auto;
`;

export const ThumbnailGame = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 300px;
`; 

export const ContainerGameData = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 10px 0px 10px 0px;
    font-family: 'Raleway', sans-serif;
`;

export const RowGameName = styled.p`
    box-sizing: border-box;
    width: 100%;
    padding: 10px 0px 10px 0px;
    color: white;
    font-weight: bold;
    font-size: 20px;
`;

export const RowGenres = styled.div`
    box-sizing: boder-box;
    display: flex;
`;

export const Genre = styled.p`
    box-sizing: border-box;
    padding: 10px 10px 10px 0px;
    color: white;
    font-size: 19px;
    font-weight: ${({isLabel}) => isLabel ? 'bold' : 'normal'}
`;

export const RowAddCart = styled.form`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    padding: 10px 0px 10px 0px;
    justify-content: space-between;
`;

export const LabelPrice = styled.p`
    box-sizing: border-box;
    padding: 10px 10px 10px 0px;
    color: white;
    font-weight: bold;
    font-size: 19px;
    width: 55%;
`;

export const FieldAddCart = styled.input`
    box-sizing: border-box;
    padding: 10px;
    border: none;
    border-radius: 5px;
    ${({type}) => (type === 'button' || type === 'submit')   
    ? `background-color: rgb(72, 185, 255);
    font-size: 15px;
    color: white;
    width: 28%;` 
    : `width: 16%;`}
`;