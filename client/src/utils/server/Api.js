import { toBase64 } from "../convertTo64";

const api = 'http://localhost:8090/api/v1';
export const SecurityApi = async (type,userValues)=>{
    const requestOptions ={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userValues)
    };

    localStorage.removeItem("token");
    const response = await fetch(api+'/auth/'+type, requestOptions)
    if (response.ok || response.status === 409) {
         return response;
    }
    else{
        throw new Error('Data could not be fetched!');
    }
}

export const getUsers =  ()=>{
    return fetch(api+'/users').then((response)=>response.json())
}

export const getActors =  ()=>{
    return  fetch(api+'/acteur').then((response)=>response.json())
}

export const addActor = async(actorValues, imageFile)=>{
    const actor = {
        firstname:actorValues.firstname,
        lastname:actorValues.lastname,
        description:actorValues.description,
        birthdate:new Date(actorValues.birthdate),
        image:  await toBase64(imageFile.imageFile) && ""
    }
        
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(actor)
    }
    return await fetch(api+'/acteur', requestOptions);
}

export const getDirectors =  ()=>{
    return  fetch(api+'/director').then((response)=>response.json())
}

export const addDirector = async(actorValues, imageFile)=>{
    const director = {
        firstname:actorValues.firstname,
        lastname:actorValues.lastname,
        description:actorValues.description,
        birthdate:new Date(actorValues.birthdate),
        image: imageFile && ""
    }
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(director)
    }
    return await fetch(api+'/director', requestOptions);
}

export const getFilms =  ()=>{
    return  fetch(api+'/films').then((response)=>response.json())
}
