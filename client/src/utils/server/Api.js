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