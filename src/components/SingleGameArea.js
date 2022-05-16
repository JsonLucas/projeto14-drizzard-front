import { Fragment } from "react";
import { Link } from "react-router-dom";
import { 
    GameThumbnail, 
    SingleGame, 
    RowGameData, 
    GameData, 
    Img
} from "../assets/styled/ListGames/StyledListGames";

export default function SingleGameArea({results}) {
    return (
        <Fragment>
        {!results && <></>}
        {results && 
            <Fragment>
                {results.map((item) =>
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
        </Fragment>
    );
}