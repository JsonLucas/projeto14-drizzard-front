import axiosConfig from "./axiosConfig";

const getSingleGame = async (headers) => {
    try{
        const request = await axiosConfig.get('/single-game', { headers });
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    }
}

export default getSingleGame;