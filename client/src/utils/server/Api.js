const api = 'http://localhost:8090/api/v1';

export const SecurityApi = async (type,userValues)=>{
    console.log(type);
    console.log(userValues);

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