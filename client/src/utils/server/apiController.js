import { SecurityApi} from "./Api";

export const ApiController = async (type,userValues)=>{
     const response = await SecurityApi(type,userValues).then((response)=>{
        if(response.ok){
            response.json().then((response)=>{
                localStorage.setItem("token",response.token);
            })
            return response;
        }
        if(response.status === 409){
            return response;
        }
    });
    if(response){
        return response;
    }
}