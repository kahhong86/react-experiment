import { useEffect, useState } from "react";
import { fetchJson } from "../../../libs/api";
import { weatherInfo } from "../../../libs/apiType";

const Display = ({parentToChild}) => {
    const [weatherDisplay, setWeatherDisplay] = useState<weatherInfo>({
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
    });
    const parentData = parentToChild;

    const weatherGet = async() => {
        try{
            const weatherRes:weatherInfo = await fetchJson(`/api/weatherApi/${parentData.city}/${parentData.country}`);
            setWeatherDisplay(weatherRes);
        }catch(error){
            console.error(error);
        }
    };

    useEffect(() => {
        weatherGet();
    },[parentData])

    console.log('weatherDisplay ',weatherDisplay)
    console.log('parentData ',parentData)

    const weatherPrint = [weatherDisplay].map(({id,name,weather,main,dt,sys},index) => {
        const date = dt;
        const day = new Date(dt*1000);
        return(
            <div key={index} className="border-t-2 border-black mt-8 pt-5">
                {name}, {sys?.country}<br/>
                {weather?.map((data,i)=> (
                    <div key={i}>
                        <strong className="text-3xl"> {data?.main}</strong> <br />
                        <span>Description: </span><span>{data?.description}</span> <br />
                    </div>
                ))}
                <span>Temperature: </span><span>{main?.temp_min} ~ {main?.temp_max}</span> <br />
                <span>Humidity: </span><span>{main?.humidity}</span><br />
                <span>{day.toLocaleString('en-GB',{ hour12: true })}</span>
            </div>
        )
    });

    return(
        <div> { parentData ? weatherPrint : ""}</div>
    )
}

export default Display;