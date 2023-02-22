export const actorInitialValues = {
    firstname:"",
    lastname:"",
    description:"",
    birthdate: "",
}

export const validateActor = (actorValues)=> {
    const errors = {};
    if (!actorValues.firstname) {
        errors.firstname = "Vous devez rentrer le prénom de l'acteur";
    } else {
        delete errors.firstname
    }

    if (!actorValues.lastname) {
        errors.lastname = "Vous devez rentrer le nom de l'acteur";
    } else {
        delete errors.lastname
    }

    if (!actorValues.birthdate) {
        errors.birthdate = "la date de naissance de l'acteur";
    } else {
        delete errors.birthdate
    }

    if(!actorValues.description){
        errors.description= "Vous devez rentrer la description de l'acteur";
    }else{delete errors.description}

    return errors;
}

