import {TextFieldMedium} from "../../components/forms/TextField/TextFieldMedium";
import {TextFieldLarge} from "../../components/forms/TextField/TextFieldLarge";
import {FormSubmit} from "../../components/buttons/FormSubmit";
import {CheckBoxField} from "../../components/CheckBox/CheckBoxField";

function Register(){
    return (
        <div className="mx-5 py-12 my-0 flex flex-col items-center">
            <section className="py-6 px-20">
                {/* document title */}
                <h1 className="text-5xl mb-8 font-extrabold ">
                    Inscription
                </h1>

                {/* registration form*/}
                <form>
                    <div className="flex flex-col max-w-xl">

                        {/* first name and last name section*/}
                        <div className="flex justify-between flex-wrap">
                            <TextFieldMedium label={"Prénom"} placeholder={"Entrer votre prénom"}/>
                            <TextFieldMedium label={"Nom"} placeholder={"Entrer votre nom"}/>
                        </div>
                        <TextFieldLarge label={"Identifiant"} placeholder={"Entrer votre identifiant"}/>
                        <TextFieldLarge label={"Email"} placeholder={"Entrer votre email"}/>
                        <TextFieldLarge label={"Mot de passe"} placeholder={"Entrer votre mot de passe"}/>
                        <TextFieldLarge label={"Confirmer votre mot de passe"} placeholder={"Confirmer votre mot de passe"}/>
                        <CheckBoxField/>
                        <FormSubmit />
                        <p className="mt-7">
                            Vous avez déja un compte ? <a href="#login" className="text-red-600 hover:underline">Connectez vous</a>
                        </p>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Register;