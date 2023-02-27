import {TextFieldMedium} from "../../components/forms/TextField/TextFieldMedium";
import {TextFieldLarge} from "../../components/forms/TextField/TextFieldLarge";
import {Button} from "../../components/buttons/Button";
import {CheckBoxField} from "../../components/forms/CheckBox/CheckBoxField";
import {initialValues, validate} from "../../services/constants/registration/Constants"
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {FormGoogle} from "../../components/buttons/FormGoogle";
import {FormFacebook} from "../../components/buttons/FormFacebook";
import {FormTwitter} from "../../components/buttons/FormTwitter";
import {ApiController} from "../../utils/server/apiController";
import Footer from "../../components/footer/Footer";

function Register(){

    const navigate = useNavigate();
    const [userValues, setUserValues] = useState(initialValues);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e)=>{
        const {name, value} = e.target
        setUserValues({...userValues,[name]:value});
    }

    const handleChecked = (e)=>{
        setAgreeTerms(e.target.checked);
    }

    const submitHandler =(e)=>{
        e.preventDefault();
        if(Object.keys(formError).length === 0){

            console.log(userValues);
            ApiController("register",{
                firstname:userValues.firstname,
                lastname:userValues.lastname,
                email:userValues.email,
                username:userValues.username,
                password:userValues.password,
                provider:""
                }).then((response)=>{
                if(response.ok){
                    navigate("/home");
                }
                else if (response.status === 409){
                    response.json().then((response)=>{
                        //je récupére la nature du message
                        console.log(response.message.search('username'))
                        if(response.message.search('username') > 0){
                            setMessage("Cet identifiant existe déja !")
                        }else{
                            setMessage("Cet adresse email existe déja !")
                        }
                    })
                    setIsSubmit(true);
                }
            })
        }else{
            setIsSubmit(true);
            setMessage("Le formulaire que vous venez de soumettre contient des erreurs");
        }
    }

    useEffect(()=>{
        setFormError(validate(userValues, agreeTerms));
    },[userValues,agreeTerms])


    return (
        <div className="mx-5 py-12 my-0 flex flex-col items-center">
            <section className="py-6 px-20">
                {/* document title */}
                <h1 className="text-5xl mb-8 font-extrabold ">
                    Inscription
                </h1>

                {isSubmit &&

                    <div
                        className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-bold"
                        role="alert">
                        <span className="font-medium">{message}</span>
                    </div>

                }
                {/* registration form*/}
                <form onSubmit={submitHandler}>
                    <div className="flex flex-col max-w-xl">

                        {/* first name and last name section*/}
                        <div className="flex justify-between flex-wrap">
                            <TextFieldMedium label={"Prénom"}
                                             type={"text"}
                                             placeholder={"Entrer votre prénom"}
                                             name={"firstname"}
                                             values={userValues.firstname}
                                             formError={formError.firstname}
                                             handleChange={handleChange}

                            />
                            <TextFieldMedium label={"Nom"}
                                             type={"text"}
                                             placeholder={"Entrer votre nom"}
                                             name={"lastname"}
                                             values={userValues.lastname}
                                             formError={formError.lastname}
                                             handleChange={handleChange}

                            />

                        </div>
                        <TextFieldLarge label={"Identifiant"}
                                        type={"text"}
                                        placeholder={"Entrer votre identifiant"}
                                        name={"username"}
                                        values={userValues.username}
                                        formError={formError.username}
                                        handleChange={handleChange}
                        />
                        <TextFieldLarge label={"Email"}
                                        type={"text"}
                                        placeholder={"Entrer votre email"}
                                        name={"email"}
                                        values={userValues.email}
                                        formError={formError.email}
                                        handleChange={handleChange}

                        />
                        <TextFieldLarge label={"Mot de passe"}
                                        type={"password"}
                                        placeholder={"Entrer votre mot de passe"}
                                        name={"password"}
                                        formError={formError.password}
                                        values={userValues.password}
                                        handleChange={handleChange}

                        />
                        <TextFieldLarge label={"Confirmer votre mot de passe"}
                                        type={"password"}
                                        placeholder={"Confirmer votre mot de passe"}
                                        name={"confirm_password"}
                                        values={userValues.confirm_password}
                                        formError={formError.confirm_password}
                                        handleChange={handleChange}

                        />
                        <CheckBoxField
                                        checked={agreeTerms}
                                        formError={formError.agree_terms}
                                        handleChecked={handleChecked}

                        />
                        <Button text="Valider"
                                color="white"
                                type="submit"
                        />

                        <p className="mt-7">
                            Vous avez déja un compte ? <Link to ="/login" className="text-red-600 hover:underline">Connectez vous</Link>
                        </p>
                    </div>
                </form>
                <div className="flex flex-col space-y-2 m-2">

                    {/* Google */}
                    <FormGoogle type="register"/>
                    {/* Facebook */}
                    <FormFacebook type="register"/>

                    {/* Twitter */}
                    <FormTwitter type="register"/>

                </div>
            </section> &nbsp;
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Register;