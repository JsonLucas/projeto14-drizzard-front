import { HeaderPage, RowSearch, SearchField } from "../assets/styled/ListGames/StyledListGames";

export default function Header(){
    return (
        <HeaderPage>
            <RowSearch>
                <SearchField type='text' placeholder='Pesquisar' />
            </RowSearch>
        </HeaderPage>
    );
}