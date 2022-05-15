import axiosConfig from "./axiosConfig";

const getGames = async () => {
    try{
        const request = await axiosConfig.get('/games');
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    }
}

export default getGames;