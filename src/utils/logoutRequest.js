import axiosConfig from "./axiosConfig";

const logoutRequest = async (headers) => {
    try{
        const request = await axiosConfig.delete('/logout', {headers});
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    }
}

export default logoutRequest;