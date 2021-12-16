//Extends error message
export class ApiError extends Error{
    public status: number;
    constructor(url: string, status: number) {
        super(`"${url}" returned ${status}`);
        if(Error.captureStackTrace){
            Error.captureStackTrace(this, ApiError);
        }
        this.name = "ApiError";
        this.status = status;
    }
}

//This function is to shortcut the writing and detailing the fetchjson.
//If not normal user need to write as following: (*simple async and await*)
// const Your_API_URL = "some URL"
// const asyncFunction = (res,req) => {
//     try{
//         const resp = await fetch(Your_API_URL);
//         return await resp.json();
//     }catch(error){
//         console.error(error);
//     }
// }
export async function fetchJson<T>(
    url: string,
    options?: RequestInit
): Promise<T> {
    const response = await fetch (url,options);
    if (!response.ok){
        //*For now we using the normal error
        // throw new ApiError(url, response.status)//Additional message for error
        throw new Error;
    }
    return await response.json();//Here we await the response from the URL, if didn't put await it will return the default value of response.
}