import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderPage, RowSearch, SearchField } from "../assets/styled/ListGames/StyledListGames";
import searchRequest from "../utils/searchRequest";

export default function Header(){
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    async function search(e){
        e.preventDefault();
        try{
            const response = await searchRequest({query});
            localStorage.setItem('searchResult', JSON.stringify(response.data));
            navigate(`/result/${query}`);
        }catch(e){
            console.log(e.message);
        }
    }
    return (
        <HeaderPage>
            <RowSearch onSubmit={search}>
                <SearchField type='text' placeholder='Pesquisar' value={query} 
                onChange={(e) => { setQuery(e.target.value) }} />
            </RowSearch>
        </HeaderPage>
    );
}