import { useEffect, Fragment, useState } from "react";
import { ContainerGames, Paragraph} from "../../assets/styled/ListGames/StyledListGames";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import SingleGameArea from "../SingleGameArea";

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
                <Link to='/'>
                    <Paragraph><ion-icon name="arrow-undo"></ion-icon> Voltar</Paragraph>
                </Link>
                {numResults === 0 && <Paragraph>Não foram encontrado resultados para "{query}"</Paragraph>}
                {numResults > 0 &&
                    <Fragment>
                        <Paragraph>Foram encontrados {numResults} resultados para "{query}"</Paragraph>
                        <SingleGameArea results={queryResults} />
                    </Fragment>}
            </ContainerGames>
            <Footer />
        </Fragment>
    );
}