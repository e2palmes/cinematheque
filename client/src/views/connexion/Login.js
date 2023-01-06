//import components
import {TextFieldLarge} from "../../components/forms/TextField/TextFieldLarge";
import React from "react";
//import les composants
import {FormFacebook} from "../../components/buttons/FormFacebook";
import {FormGoogle} from "../../components/buttons/FormGoogle";
import {FormApple} from "../../components/buttons/FormApple";
import {FormConnexion} from "../../components/buttons/FormConnexion";
//import footer

import Footer from "../../components/footer/Footer";



//function that return login
function Login() {
    return (
        <div className="mx-5 py-12 my-0 flex flex-col items-center">
            <section className="py-6 px-20">
                {/* document title */}
                <h1 className="text-5xl mb-8 font-extrabold ">
                    Connexion
                </h1>

                {/* Connexion form*/}
                <form>
                    <div className="flex flex-col max-w-xl">

                        {/* first name and last name section*/}
                        <TextFieldLarge label={"Identifiant"} placeholder={"Entrer votre identifiant"}/>
                        <TextFieldLarge label={"Mot de passe"} placeholder={"Entrer votre mot de passe"}/>
                        <FormConnexion/>
                        <p className="mt-7">

                            Vous n'avez pas de compte ? <a href="#reg" className="text-red-600 hover:underline">Inscrivez-Vous</a>
                        </p><br/>
                        <p> Ou bien connectez-vous avec : </p><br/>
                        <FormFacebook/><br/>
                        <FormGoogle/><br/>
                        <FormApple/>
                    </div>

                </form>

            </section> <br/><br/>
            {/*footer*/}
            <footer>
                <Footer/>
            </footer>
        </div>


    );
}


export default Login