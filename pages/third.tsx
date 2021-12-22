import { useEffect, useState } from "react";
import { fetchJson } from "../libs/api";
import { weatherInfo } from "../libs/apiType";
import Layout from "../src/components/layout";

const ApiKey = "9e128448d987f8a74e26245aaf984dbc";

const ThirdExperiment = () => {
    const [ data, setData ] = useState<any>({});
    const [ weatherApi, setWeatherApi] = useState<string>("");
    //Both weatherData and weatherCollection needs to be first define to avoid undefined property error when mapping. *Important*
    const [ weatherData , setWeatherData ] = useState<weatherInfo>({
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
    const [ weatherCollection, setWeatherCollection ] = useState<any>([{
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
    const [ weatherBoolean, setWeatherBoolean ] = useState<boolean>(true);
    const [ errorValidation, setErrorValidation ] = useState<boolean>(false)

    //This is important because setState is async but without a promise. The first submit will be empty without this handleChange function.
    const handleChange = (e) => {
        setData((prev)=> ({
            //...prev is important, return back the previous value. without this, it will only record one set of data.
            ...prev, 
            [e.target.name]: e.target.value,
        }));
    }

    //Once the data has been updated on handleChange. When user click submit, handleSubmit will fetch data from URL
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataValue = [data];
        const weatherFetch = `https://api.openweathermap.org/data/2.5/weather?q=`+dataValue[0].city+`,`+dataValue[0].country+`&appid=`+ApiKey;
        setWeatherApi(weatherFetch);
    }

    //Delete array by index function
    const deleteItem = (index) => {
        const newCollection = [...weatherCollection];
        newCollection.splice(index,1);
        setWeatherCollection(newCollection);
    }

    //Reprint main result
    const reprintItem = (index) => {
        setWeatherData(weatherCollection[index]);
    }

    useEffect(() => {
        const weatherGet = async() => {
            try{
                setErrorValidation(false);
                if(weatherApi !== ""){
                    const weatherRes:weatherInfo = await fetchJson(weatherApi);
                    setWeatherData(weatherRes);
                    if(weatherBoolean){
                        setWeatherBoolean(false);
                        setWeatherCollection([weatherRes]);
                    }else{
                        setWeatherCollection([...weatherCollection, weatherRes]);
                    }
                }
                //If you console log your weatherData here, u will received a blank state. 
                //This is because useState is async and this console fire before the data has been set. *Cont...*
            }catch(error){
                console.error(error);
                setErrorValidation(true);
            }
        };
        //This effect will run once the dependency change value
        weatherGet();
    },[weatherApi]) //<---dependency
    //*...Resume* If console log here for weatherData. You will received the actual data from API.
    //Reminder: map needs to be in an array.
    //Both weatherPrint and weatherCollectionPrint needs to be declare in the start if to avoid property error.
    const weatherPrint = [weatherData].map(({id,name,weather,main,dt,sys},index) => {
        const date = dt;
        const day = new Date(dt*1000);
        return(
            <div key={index}>
                {name}, {sys.country}<br/>
                {weather.map((data,i)=> (
                    <div key={i}>
                        <strong className="text-3xl"> {data.main}</strong> <br />
                        <span>Description: </span><span>{data.description}</span> <br />
                    </div>
                ))}
                <span>Temperature: </span><span>{main.temp_min} ~ {main.temp_max}</span> <br />
                <span>Humidity: </span><span>{main.humidity}</span><br />
                <span>{day.toLocaleString('en-GB',{ hour12: true })}</span>
            </div>
        )
    });
    const weatherCollectionPrint = [...weatherCollection].map((collectionData,index) => {
        return(
            <div key={index} className="mb-2 relative">
                {collectionData.name}, {collectionData.sys.country} 
                <div className="right-0 top-0 absolute">
                    <button className="bg-blue-500 text-white rounded-xl px-5 mr-2" onClick={() => {reprintItem(index)}}>Search</button>
                    <button className="bg-red-500 text-white rounded-xl px-5" onClick={() => {deleteItem(index)}}>Delete</button>
                </div>
            </div>
        )
    });

    return (
        <Layout title="Experiment 3">
            <h1>Experiment 3 (Get weather interview)</h1>
            
            <h2 className="font-bold">Today’s Weather</h2>
            <span className="w-full border-b-2 border-solid border-black h-1 block mb-5"></span>
            <form onSubmit={handleSubmit}>
                <div className="md:inline-block">
                    <label htmlFor="city" className="w-2/6 md:w-auto md:w-16 inline-block md:mr-2">City:</label> 
                    <input type="text" name="city" onChange={handleChange} className="w-4/6 md:w-auto border-2 border-black"/>
                </div>
                <div className="block md:inline-block md:ml-10 mt-2">
                    <label htmlFor="country"className="w-2/6 md:w-auto  md:w-16 inline-block md:mr-2">Country:</label> 
                    <input type="text" name="country" onChange={handleChange} className="w-4/6 md:w-auto border-2 border-black"/>
                </div>
                <button type="submit" className="w-full md:w-auto bg-blue-500 mt-2 md:ml-10 text-white py-1 px-5 rounded-xl">Submit</button>
            </form>
            {errorValidation ? <div className="bg-red-300 w-full px-2 py-1 my-5 border-2 border-red-500 border-solid">
                Not found
            </div> : ""}
            { weatherApi ?
                <div>
                    <h2 className="mt-5 font-bold">Results:</h2>
                    {weatherPrint}
        
                    <h2 className="mt-5 mb-3 font-bold border-b-2 border-black pb-2">Collection Data:</h2>
                    {weatherCollectionPrint} 
                </div>
                : ""
            }
            
        </Layout>
    )
}

export default ThirdExperiment;