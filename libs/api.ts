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
    return await response.json();
}