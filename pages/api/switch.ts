import { fetchJson } from "../../libs/api";
import { switchGamesJson } from "../../libs/apiType";

//Fetching data outside of your local site
const apiSample = "https://api.sampleapis.com/switch/games";

const switchJson = async (req,res) => {
    if(req.method !== "GET"){
        return res.status(400).end();
    }
    try{
        const response = await fetchJson<switchGamesJson>(apiSample);
        res.status(200).json(response);
    }catch(error){
        //Catch the error message of json
        // console.log(error);
        //Alternative you can output your error into something else, doesn't mean is an error. (But for now we are not using it)
        res.status(200).json([{
            id: "0",
            name: "error",
        }]);
    }

}

export default switchJson;