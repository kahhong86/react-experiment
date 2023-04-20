import { fetchJson } from "../../../libs/api";

const matchId = async (req,res) => {    
    const ApiKey = "183459D2D4DB60AF9A30FCB652A4882D";
    const { steam } = req.query;
    const tempNum = 7090447818;
    const statsFetch = `https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1/?key=`+ApiKey+`&match_id=${steam}`;
    // const statsFetch = `https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/v1/?key=`+ApiKey+`&match_id=`+tempNum;

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