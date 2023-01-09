//import components
import { TextFieldLarge } from "../../components/forms/TextField/TextFieldLarge";
import { FormFacebook } from "../../components/buttons/FormFacebook";
import { FormGoogle } from "../../components/buttons/FormGoogle";
import { FormApple } from "../../components/buttons/FormApple";
import { FormConnexion } from "../../components/buttons/FormConnexion";
import {initialValues, validate} from "../../services/constants/login/Constants"
import {useState, useEffect} from "react";
//import footer
import Footer from "../../components/footer/Footer";




function Login() {
    //declaration des valeurs
    const [userValues, setUserValues] = useState(initialValues);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e)=>{
        const {name, value} = e.target
        setUserValues({...userValues,[name]:value});
    }

    const submitHandler =(e)=>{
        e.preventDefault();
        if(Object.keys(formError).length === 0){

            console.log("form submitted");
        }else{
            setIsSubmit(true);
            console.log("form have errors");
        }
    }

    useEffect(()=>{
        setFormError(validate(userValues));
    },[userValues])

    return (
        <div className="mx-5 py-12 my-0 flex flex-col items-center">
            <section className="py-6 px-20">
                <h1 className="text-5xl mb-8 font-extrabold ">
                    Connexion
                </h1>

                {isSubmit &&

                    <div
                        className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-bold"
                        role="alert">
                        <span className="font-medium">L'identifiant ou le mot de passe sont incorrects</span>
                    </div>

                }
                {/* registration form*/}
                <form onSubmit={submitHandler}>
                    <div className="flex flex-col max-w-xl">

                        {/* first name and last name section*/}
                        <div className="flex justify-between flex-wrap">                                        
                        </div>
                        <TextFieldLarge label="Identifiant"
                                        type="text"
                                        placeholder="Entrer votre identifiant"
                                        name="username"
                                        values={userValues.username}
                                        formError={formError.username}
                                        handleChange={handleChange}


                        />
                        
                        <TextFieldLarge label="Mot de passe"
                                        type="password"
                                        placeholder="Entrer votre mot de passe"
                                        name="password"
                                        formError={formError.password}
                                        values={userValues.password}
                                        handleChange={handleChange}

                        />
                        
                        <FormConnexion/>
                        <p className="mt-7">
                            Vous avez déja un compte ? <a href="#login" className="text-red-600 hover:underline">Connectez vous</a>
                        </p>
                        <br />
                        <p> Ou bien connectez-vous avec : </p>
                        <br />
                        <FormFacebook />
                        <br />
                        <FormGoogle />
                        <br />
                        <FormApple />
                    </div>

                </form>

            </section>
            <br />
            <br />
            {/*footer*/}
            <footer>
                <Footer />
            </footer>
        </div>


    );
}


export default Login