import { useState,useEffect } from "react";
import { fetchJson } from "../libs/api"
import { switchGamesJson } from "../libs/apiType";

const useApiFetch = () => {
    const [asyncFetchGames, setAsyncFetchGames] = useState<any>([]);

    const fetchSwitchGames = async() => {
        try{
            const switchRes = await fetchJson<switchGamesJson>("/api/switch"); //Fetching api from local machine. This will prevent any CORS error
            setAsyncFetchGames(switchRes);
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        fetchSwitchGames();
    },[]);

    return asyncFetchGames;
}

export default useApiFetch;