import { useEffect, Fragment, useState } from "react";
import { ContainerGames, GameThumbnail, Header, Img, RowSearch, SearchField, SingleGame, RowGameData, GameData, FooterPage, FooterIcons } from "../../assets/styled/ListGames/StyledListGames";
import getGames from "../../utils/listGamesRequest";

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
            <Header>
                <RowSearch>
                    <SearchField type='text' placeholder='Pesquisar' />
                </RowSearch>
            </Header>
            <ContainerGames>
                {!loaded && <></>}
                {loaded &&
                    <Fragment>
                        {games.map((item) =>
                            <SingleGame key={item.image}>
                                <GameThumbnail>
                                    <Img src={item.image} />
                                </GameThumbnail>
                                <RowGameData>
                                    <GameData type='name'>{item.name}</GameData>
                                    <GameData type='price'>{item.price}</GameData>
                                </RowGameData>
                            </SingleGame>
                        )}
                    </Fragment>}
            </ContainerGames>
            <FooterPage>
                <FooterIcons><ion-icon name="bag-outline"></ion-icon></FooterIcons>
                <FooterIcons><ion-icon name="cart-outline"></ion-icon></FooterIcons>
                <FooterIcons><ion-icon name="enter-outline"></ion-icon></FooterIcons>
                {/*<ion-icon name="exit-outline"></ion-icon>*/}
            </FooterPage>
        </Fragment>
    );
}