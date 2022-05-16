import { ContainerGames, Paragraph } from "../../assets/styled/ListGames/StyledListGames";
import { useEffect, Fragment, useState } from "react";
import getGames from "../../utils/listGamesRequest";
import Footer from "../Footer";
import Header from "../Header";
import SingleGameArea from "../SingleGameArea";

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
                {!loaded && <Paragraph>Carregando. . .</Paragraph>}
                {loaded && <SingleGameArea results={games} /> }
            </ContainerGames>
            <Footer />
        </Fragment>
    );
}