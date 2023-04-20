import { FunctionComponent, useEffect } from "react";
import { fetchJson } from "../libs/api";
import Layout from "../src/components/layout";
import { useState } from "react";
import { GameMode,LobbyType } from "../src/components/thirteenth/data";

interface ThirteenthProps{}

interface apiGet{
    result:{
        players:{
            account_id:number,
            player_slot:number
        },
        radiant_win:boolean,
    }
}

interface stats{
    dire_score:number;
    radiant_score:number;
    lobby_type:number;
    game_mode:number;
    radiant_win:boolean;
}

interface playerStats{
    account_id:number;
    heroName:number;
    kills:number;
    deaths:number;
    assists:number;
    hero_id:number;
}

interface heroGet{
    id:number;
    name:string;
    localized_name:string;
}

const Thirteenth:FunctionComponent<ThirteenthProps> = () => {
    const [matchId,setMatchId] = useState<number>(0);
    const [stats,setStats] = useState<stats>({
        dire_score: 0,
        radiant_score:0,
        lobby_type:0,
        game_mode:0,
        radiant_win:null,
    });
    const [inputValue,setInputValue] = useState<number>();
    const [initial,setInitial] = useState<boolean>(false);
    const [heroStats, setHeroStats] = useState([]);
    const [playerStats, setPlayerStats] = useState<playerStats[]>([]);

    // const statsGet = async() => {
    //     try{
    //         const apiGet:apiGet = await fetchJson(`/api/steamApi/`+matchId);
    //         console.log('apiget ',apiGet.result);
    //         setStats(apiGet.result);
    //     }catch(error){
    //         console.error(error);
    //     }
    // } 

    // const heroGet = async () => {
    //     try{
    //         const heroGet:any = await fetchJson('/api/heroApi/hero');
    //         setHeroStats(heroGet);
    //     }catch(error){
    //         console.error(error);
    //     }
    // }


    const handleSubmit = () => {
        setInitial(true);
        setMatchId(inputValue);
    }

    const handleChange = (e) => {
        const tempValue = e.target.value;
        console.log('valuez ',tempValue);
        setInputValue(tempValue);
    }

    useEffect(() => {
        if(initial){
            const promise1 = Promise.all([
                fetch(`/api/steamApi/`+matchId),
                fetch('/api/heroApi/hero')
            ]).then(async([matchStats,heroStats])=>{
                const a = await matchStats.json();
                const b = await heroStats.json();
                console.log('aa ',a.result );
                console.log('bb ',a.result.players);
                setStats(a.result);
                setPlayerStats(a.result.players);
                setHeroStats(b?.result?.heroes);
            });
        }
    },[matchId]);

    //Print all the data returning from fetch API (but no use anymore)
    const printStats = Object.entries(stats).map(([key,value],index) => {
        const heroName = (arrNum) => {
            return heroStats.find(obj => obj.id === value[arrNum]?.hero_id)?.name.substring(14);
        }
        return(
            <div key={index}>
                {/* {key}:{value.toString()} */}
                {key == "players" ? 
                    Object.keys(value).map((r,i) => {
                        return(
                            <div key={i} className="px-2 border border-black">
                                <p>Player ID: <br />{value[r]?.account_id}</p> 
                                <p>{heroName(r)}</p>
                            </div>
                        )
                    }):
                key == "picks_bans"?
                    Object.keys(value).map((r,i) => {
                        return(
                            <div key={i}>{value[r]?.is_pick ? "Pick" : "Ban"} Hero ID: {value[r]?.hero_id} {heroName(r)}</div>
                        )
                    }):
                    <p>{key}:{value}</p>
                }
            </div>
        )
    });

    //Player Details
    const heroData = playerStats.map(({account_id,hero_id,kills,deaths,assists},index) => {
        //Find herostats array hero id to return the hero name
        let heroName = heroStats.find(obj => obj.id === hero_id)?.name.substring(14).replace("_"," ");
        
        //Change name to Uppercase
        if(heroName != undefined){
            heroName = heroName.split(" ");

            for(let i = 0; i < heroName.length; i++){
                heroName[i] = heroName[i].charAt(0).toUpperCase() + heroName[i].slice(1);
            }
            heroName = heroName.join(" ");
            heroName = heroName[0].toUpperCase() + heroName.slice(1);
        }
        
        return(
            index <= 3 ?
            <div key={index} className="border border-green-500 px-2 flex-1 md:w-1/5 inline-block">
                <strong>Player ID:</strong>   <br />
                <span className="block mb-2">{account_id}</span>
                <span className="block mb-2 h-12">{heroName}</span>
                <span className="block">{kills} / {deaths} / {assists}</span>
            </div> :
            index == 4 ?
            <div key={index} className="border border-green-500 px-2 flex-1 xl:mr-10 md:w-1/5 inline-block">
                <strong>Player ID:</strong>   <br />
                <span className="block mb-2">{account_id}</span>
                <span className="block mb-2 h-12">{heroName}</span>
                <span className="block">{kills} / {deaths} / {assists}</span>
            </div>
            :
            <div key={index} className="border border-red-500 xl:px-2 flex-1 md:w-1/5 inline-block md:px-0">
                <strong>Player ID:</strong>   <br />
                <span className="block mb-2">{account_id}</span>
                <span className="block mb-2 h-12">{heroName}</span>
                <span className="block">{kills} / {deaths} / {assists}</span>
            </div>
        )
    });


    return(
        <Layout title="Dota Stats">
            <h1>Dota Stats with Steam Api</h1>
            <input type="text" onChange={handleChange} className="border-2 border-black"/> 
            <button className="bg-blue-500 px-2 ml-2 text-white mb-5" onClick={handleSubmit}>Submit</button><br />
            <span className="text-sm">7090486740</span>
            <div>
                <div className="text-center mb-2">
                    <strong className="text-xl block">
                        {
                            (initial == true && stats.radiant_win == true)? 
                                "Radiant Win" : 
                            (initial == true && stats.radiant_win == false) ? 
                                "Dire Win" : ""
                        }
                    </strong>
                    <p>Lobby Type: {LobbyType.find(obj => obj.id === stats.lobby_type)?.type}</p>
                    <p>Game Mode: {GameMode.find(obj => obj.id === stats.game_mode)?.type}</p>
                </div>
                <div className="clear-both">
                    <div className="inline-block float-right font-bold text-xl">{stats.dire_score}</div>
                    <div className="inline-block font-bold text-xl">{stats.radiant_score}</div>
                </div>
                <div className="md:flex-none xl:flex text-center flex-wrap">
                    {heroData}
                </div>
                
                
            </div>
        </Layout>
    )
}

export default Thirteenth;