import axiosConfig from "./axiosConfig";

const cartRequest = async (body,token) => {
    try{
        const request = await axiosConfig.post('/order', body, token);
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    };
}

export default cartRequest;