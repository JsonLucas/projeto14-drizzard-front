import { useEffect, Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { 
    ContainerGames, 
    GameThumbnail, 
    Img, 
    SingleGame, 
    RowGameData, 
    GameData } from "../../assets/styled/ListGames/StyledListGames";
import Footer from "../Footer";
import Header from "../Header";

export default function ResultSearch() {
    const { query } = useParams();
    const [numResults, setNumResults] = useState(0);
    const [queryResults, setQueryResults] = useState([]);
    useEffect(() => {
        try{
            const results = JSON.parse(localStorage.getItem('searchResult'));
            setQueryResults(results);
            setNumResults(results.length);
        }catch(e){
            console.log(e.message);
        }
    }, []);
    return (
        <Fragment>
            <Header />
            <ContainerGames>
                {numResults === 0 && <p>Não foram encontrado resultados para "{query}"</p>}
                {numResults > 0 &&
                    <Fragment>
                        {queryResults.map((item) =>
                            <Link key={item.name} to={`/game/${item._id}`}>
                                <SingleGame>
                                    <GameThumbnail>
                                        <Img src={item.image} />
                                    </GameThumbnail>
                                    <RowGameData>
                                        <GameData type='name'>{item.name}</GameData>
                                        <GameData type='price'>{item.price}</GameData>
                                    </RowGameData>
                                </SingleGame>
                            </Link>
                        )}
                    </Fragment>}
            </ContainerGames>
            <Footer />
        </Fragment>
    );
}