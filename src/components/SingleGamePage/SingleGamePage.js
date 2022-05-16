import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img } from "../../assets/styled/ListGames/StyledListGames";
import getSingleGame from "../../utils/singleGameDataRequest";
import { 
    Container, 
    ThumbnailGame, 
    ContainerGameData, 
    RowGameName, 
    RowGenres, 
    Genre, 
    RowAddCart, 
    LabelPrice, 
    FieldAddCart } from "../../assets/styled/SingleGame/StyledSingleGame";
import Footer from "../Footer";
import Header from "../Header";
export default function SingleGamePage(){
    const { _id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [cart, setCart] = useState({});
    const [qtde, setQtde] = useState('');
    useEffect(() => {
        async function getGameData(){
            try{
                const response = await getSingleGame({_id});
                const cartData = {
                    name: response.data.name, 
                    price: response.data.price, 
                    image: response.data.image
                };
                setData(response.data);
                setLoaded(true);
                setCart({...cart, ...cartData});
            }catch(e){
                console.log(e.message);
            }
        }
        getGameData();
    }, []);
    function addCart(e){
        e.preventDefault();
        const cartData = {...cart, qtde};
        const cartLocalData = localStorage.getItem('cartData');
        if(cartLocalData){
            const parseCartLocalData = JSON.parse(cartLocalData);
            const aux = [...parseCartLocalData, {cartData}];
            localStorage.setItem('cartData', JSON.stringify(aux));
        }else{
            localStorage.setItem('cartData', JSON.stringify([{cartData}]));
        }
    }
    return (
        <Fragment>
            <Header />
            {!loaded && <p>Carregando. . .</p>}
            {loaded && 
                <Container key={data._id}>
                    <ThumbnailGame>
                        <Img src={`${data.image}`} />
                    </ThumbnailGame>                    
                    <ContainerGameData>
                        <RowGameName>{data.name}</RowGameName>
                        <RowGenres>
                            <Genre isLabel={true}>Gêneros:</Genre> 
                            {data.genres.map((item) => <Genre>{item}</Genre>)}
                        </RowGenres>
                        <RowAddCart onSubmit={addCart}>
                            <LabelPrice>{data.price}</LabelPrice>
                            <FieldAddCart type='number' placeholder='Qtde.' min={0} max={data.stock} 
                            value={qtde} onChange={(e) => { setQtde(e.target.value) }} required />
                            <FieldAddCart type='submit' value='Selecionar' />
                        </RowAddCart>
                    </ContainerGameData>
                </Container>}
            <Footer />
        </Fragment>
    );
}