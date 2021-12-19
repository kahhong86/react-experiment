import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../src/components/layout"
import { fetchJson } from "../libs/api";
import { switchGamesJson } from "../libs/apiType";
// import fetchingURL from "./api/switch";

const apiSample = "https://api.sampleapis.com/switch/games";

const SecondExperiment = () => {
    const [switchGames, setSwitchGames] = useState<any>([]);
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
        fetch(apiSample)
            .then(res => {
                //This is where api response came back. It can return 200 or 404.
                // console.log(res) //Result of res.
                return(
                    res.json() //This is where you turn the data into json format
                )
            })
            .then(result => {
                setSwitchGames(result);
            });

        fetchSwitchGames();
    },[]);


    // Key in mapping is important to as an identifier, so that each list item is different
    // Mapping needs to be in an array
    const useSwitchGames = switchGames.map((games) => {
        return(
            <div key={games.id}>
                <p><strong className="w-9 inline-block">{games.id}</strong> {games.name}</p>
            </div>
        )
    });

    const useAsyncFetchGames = asyncFetchGames.map((asyncFetchGame) => {
        return(
            <div key={asyncFetchGame.id}>
                <p><strong className="w-9 inline-block">{asyncFetchGame.id}</strong> {asyncFetchGame.name}</p>
            </div>
        )
    });

    return(
        <Layout title="Experiment 2">
            <h1 className="text-2xl font-bold mb-5">
                Experiment 2 (Fetch from api)
            </h1>
            <div className="flex">
                <div className="flex-1">
                    <h2 className="font-bold">Fetch (fetching directly from URL)</h2>
                    {useSwitchGames}
                </div>
                <div className="flex-1">
                    <h2 className="font-bold">Async (fetching from local URL: <Link href="/api/switch"><a className="text-blue-500 underline" target="_blank">/api/switch</a></Link>)</h2>
                    {useAsyncFetchGames}
                </div>
            </div>
        </Layout>
    )
}

export default SecondExperiment;