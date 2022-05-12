import axiosConfig from "./axiosConfig";

const signUpRequest = async (body) => {
    try{
        const request = await axiosConfig.post('/sign-up', body);
        return request;
    }catch(e){
        console.log(e.message);
        if(e.response){
            return e.response;
        }
    }
    return false;
}

export default signUpRequest;