
export const initialValues = {
    username:"",
    password:"",
}

export const validate = (userValues)=>{

    const errors = {};
    if(!userValues.username){
        errors.username = "Veuillez entré l'identifiant"
    }
    else{delete errors.username}


    if(!userValues.password){
        errors.password = "Veuillez entré votre mot de passe"
    }
    else{delete errors.password}

    return errors;

}