import { useEffect, useState } from "react";
import Layout from "../src/components/layout"
// import fetchingURL from "./api/switch";

const apiSample = 
// "https://jsonplaceholder.typicode.com/posts";
"https://api.sampleapis.com/switch/games";

const SecondExperiment = () => {
    const [posts, setPosts] = useState([]);
    const [switchGames, setSwitchGames] = useState([]);

    useEffect(() => {
        fetch(apiSample)
            .then(res => {
                //This is where api response came back. It can return 200 or 404.
                console.log(res) //Result of res.
                return(
                    res.json() //This is where you turn the data into json format
                )
            })
            .then(result => {
                // console.log(`result ${result}`)
                console.log("result")
                console.log(result)
                setSwitchGames(result);
            });

        const fetchPosts = async () => {
            const response = await fetch (apiSample); //await is where it wait for the return of api. Useful when data takes a long time.
            const postsData = await response.json();
            setPosts(postsData);
        }
        fetchPosts();
    },[]);

    const usePosts = posts.map((post) => {

        // Key in mapping is important to as an identifier, so that each list item is different
        return(
            <div key={post.id}>
                <p><strong className="w-9 inline-block">{post.id}</strong> {post.name}</p>
            </div>
        )
    });

    const useSwitchGames = switchGames.map((games) => {
        return(
            <div key={games.id}>
                <p><strong className="w-9 inline-block">{games.id}</strong> {games.name}</p>
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
                    <h2 className="font-bold">Fetch</h2>
                    {useSwitchGames}
                </div>
                <div className="flex-1">
                    <h2 className="font-bold">Async</h2>
                    {usePosts}
                </div>
            </div>
        </Layout>
    )
}

export default SecondExperiment;