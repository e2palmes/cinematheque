import {TextFieldMedium} from "../../components/forms/TextField/TextFieldMedium";
import {TextFieldLarge} from "../../components/forms/TextField/TextFieldLarge";
import {FormSubmit} from "../../components/buttons/FormSubmit";
import {CheckBoxField} from "../../components/forms/CheckBox/CheckBoxField";
import {initialValues, validate} from "../../services/constants/registration/Constants"
import {useState, useEffect} from "react";
import Footer from "../../components/footer/Footer";

function Register(){

    const [userValues, setUserValues] = useState(initialValues);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

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

            console.log("form submitted");
        }else{
            setIsSubmit(true);
            console.log("form have errors");
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
                        <span className="font-medium">Le formulaire que vous venez de soumettre contient des erreurs</span>
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
                                                name={"first_name"}
                                                values={userValues.first_name}
                                                formError={formError.first_name}
                                                handleChange={handleChange}

                            />
                            <TextFieldMedium label={"Nom"}
                                                type={"text"}
                                                placeholder={"Entrer votre nom"}
                                                name={"last_name"}
                                                values={userValues.last_name}
                                                formError={formError.last_name}
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
                        <FormSubmit />
                        <p className="mt-7">
                            Vous avez déja un compte ? <a href="#login" className="text-red-600 hover:underline">Connectez vous</a>
                        </p>
                    </div>
                </form>
            </section><br/><br/>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Register;