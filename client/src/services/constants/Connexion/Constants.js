/*
*Login page constants
*
*/
export const initialValues = {
    username:"",
    password:"",

}
export const validate = (userValues)=>{
    const errors = {};


    if(!(userValues.username)){
        errors.username = "Veuillez saisir votre identifiant"
    }else{delete errors.username}


    if(!(userValues.password)){
        errors.password = "Veuillez saisir votre mot de passe"
    }
    else{delete errors.password}

    return errors;
}
