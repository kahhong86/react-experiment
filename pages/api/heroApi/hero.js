import { fetchJson } from "../../../libs/api";

const matchId = async (req,res) => {    
    const ApiKey = "183459D2D4DB60AF9A30FCB652A4882D";
    const { steam } = req.query;
    console.log(req.query);
    const statsFetch = `https://api.steampowered.com/IEconDOTA2_570/GetHeroes/v1/?key=`+ApiKey;

    if(req.method !== "GET"){
        return res.status(400).end();
    }
    try{
        const response = await fetchJson(statsFetch);        
        res.status(200).json(response);
    }catch(error){
        console.error(error)
    }
}

export default matchId;