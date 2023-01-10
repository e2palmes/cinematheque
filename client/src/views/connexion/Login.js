//import react 
import React, { useState } from "react";
//import components
import { TextFieldLarge } from "../../components/forms/TextField/TextFieldLarge";
import { FormFacebook } from "../../components/buttons/FormFacebook";
import { FormGoogle } from "../../components/buttons/FormGoogle";
import { FormApple } from "../../components/buttons/FormApple";
import { FormConnexion } from "../../components/buttons/FormConnexion";
import { CheckBoxField } from "../../components/CheckBox/CheckBoxField";
import Footer from "../../components/footer/Footer";




function Login() {
    const [error, setError] = useState(null);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if(Object.keys(formError).length === 0){

            console.log("form submitted");
        }else{
            setIsSubmit(true);
            console.log("form have errors");
        }
    };

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
                        <span className="font-medium">L'identifiant ou le mot de passe sont incorrects</span>
                    </div>

                }
                {/* registration form*/}
                <form onSubmit={submitHandler}>
                    <div className="flex flex-col max-w-xl">
                        <TextFieldLarge label={"Identifiant"} placeholder={"Entrer votre identifiant"} required />
                        <TextFieldLarge label={"Mot de passe"} placeholder={"Entrer votre mot de passe"} type="password" required />
                        <CheckBoxField required onChange={e => setAcceptTerms(e.target.checked)} />
                        {!acceptTerms && <div className="error-message"></div>}
                        <br/>
                        <FormConnexion />
                        <div className="error-message">{error}</div>
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