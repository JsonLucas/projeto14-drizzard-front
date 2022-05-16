import { useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { 
    ContainerGames, 
    GameThumbnail, 
    Img, 
    SingleGame, 
    RowGameData, 
    GameData } from "../../assets/styled/ListGames/StyledListGames";
import getGames from "../../utils/listGamesRequest";
import Footer from "../Footer";
import Header from "../Header";

export default function ListGames() {
    const [games, setGames] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        async function listGames() {
            try {
                const response = await getGames();
                setGames(response.data);
                setLoaded(true);
            } catch (e) {
                console.log(e.message);
            }
        }
        listGames();
    }, []);
    return (
        <Fragment>
            <Header />
            <ContainerGames>
                {!loaded && <></>}
                {loaded &&
                    <Fragment>
                        {games.map((item) =>
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