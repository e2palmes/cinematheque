import {TwitterLoginButton} from "react-social-login-buttons";
import {LoginSocialTwitter} from "reactjs-social-login";
import {useNavigate} from "react-router-dom";
import {ApiController} from "../../utils/server/apiController";

export const FormTwitter = ({type}) => {
    const navigate = useNavigate();
    return (
        <LoginSocialTwitter client_id="LUZqanB0cFpEMnF6MU9sSUs3clU6MTpjaQ"
                            redirect_uri="http://localhost:3000/login"
                            onReject={(err)=>console.log(err)}
                            onResolve={({ provider, data })=>
                            {
                                const {
                                    name,
                                    username,
                                } = data;

                                const userValues = {
                                    firstname:"",
                                    lastname:name,
                                    email:"",
                                    password:"",
                                    username:username,
                                    provider:"twitter"
                                }
                                ApiController(type,userValues).then((res)=>{
                                    if(res){
                                        navigate("/home");
                                    }
                                })
                            }}>

            <TwitterLoginButton text="continuer avec twitter" className="w-30 rounded-lg"/>
        </LoginSocialTwitter>
    );

}