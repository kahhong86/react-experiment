import { fetchJson } from "../../../libs/api";
 
const weatherId = async (req,res) => {    
    const ApiKey = "9e128448d987f8a74e26245aaf984dbc";
    const { weather } = req.query;
    const weatherFetch = `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=`+ApiKey;
    if(req.method !== "GET"){
        return res.status(400).end();
    }
    try{
        const response = await fetchJson(weatherFetch);        
        res.status(200).json(response);
    }catch(error){
        //Catch the error message of json
        // console.log(error);
        //Alternative you can output your error into something else, doesn't mean is an error.
        res.status(200).json([{
            id: 0,
            name: "",
            main:{
                temp_min: 0,
                temp_max: 0,
                humidity: 0,
            },
            sys: {
                country:"",
            },
            weather:[
                {
                    main: "",
                    description:""
                }
            ],
            dt: 0,
        }]);
    }
}

export default weatherId;