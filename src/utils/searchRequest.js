import axiosConfig from "./axiosConfig";

const searchRequest = async (headers) => {
    try{
        const request = axiosConfig.get('/search', {headers});
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    }
}

export default searchRequest;