import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../src/components/layout";

const SixthExperiment: NextPage = () => {
    const DateTime = new Date().toLocaleTimeString('en-GB');

    const [allSeconds,setAllSeconds] = useState<number>(new Date().getHours()*60*60+new Date().getMinutes()*60+new Date().getSeconds());
    const [newHour,setNewHour] = useState<number>(Math.floor(allSeconds/60/60));
    const [newMinute,setNewMinute] = useState<number>(Math.floor((allSeconds - newHour*60*60)/60));
    const [newSecond,setNewSecond] = useState<number>(allSeconds - (newHour*60*60 + newMinute*60));
    const [changeInput, setChangeInput] = useState<number>(1);
    const [useInput,setUseInput] = useState<number>(1);
    const [interData,setInterData] = useState<number>(new Date().getSeconds());

    console.log(allSeconds - (newHour*60*60 + newMinute*60))

    useEffect(() => {
        let timerSec = setTimeout(() => {
            setAllSeconds(allSeconds - useInput);
            setNewHour(Math.floor(allSeconds/60/60));
            setNewMinute(Math.floor((allSeconds - newHour*60*60)/60));
            setNewSecond((allSeconds - (newHour*60*60 + newMinute*60)));
        },1000);

        return () => {
            clearTimeout(timerSec);
        };
    },[allSeconds]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUseInput(changeInput)
    }

     //This is important because setState is async but without a promise. The first submit will be empty without this handleChange function.
     const handleChange = (e) => {
        setChangeInput(e.target.value)
    }

    return(
        <Layout title="Sixth Experiment">
            <h1>Sixth Experiment (Backward Clock)</h1>
            <p className="mb-5">Current Time: {DateTime}</p>
            <p className="mb-5">Clock that goes backward instead of forward</p>
            <p className="inline-block w-36"><strong className="w-20 block">Hours :</strong>   <span className="text-8xl">{newHour}</span></p>
            <p className="inline-block w-36"><strong className="w-20 block">Minutes :</strong> <span className="text-8xl">{newMinute}</span></p>
            <p className="inline-block w-36"><strong className="w-20 block">Seconds :</strong> <span className="text-8xl">{newSecond}</span></p>

            <p className="block mt-10"><strong>All in Seconds:</strong></p>
            <p>{allSeconds}</p>
            <p>Hour: {Math.floor(allSeconds/60/60)} Minute:{Math.floor(allSeconds/60)} </p>

            <form onSubmit={handleSubmit} className="mt-5">
                <label htmlFor="inputValue">Interval Value: </label>
                <input type="text" name="intervalValue" onChange={handleChange} className="border-2 border-black"/>
                <button className="bg-blue-500 rounded-lg text-white py-1 px-5 ml-3">Submit</button>
            </form>
            
        </Layout>
    )
}

export default SixthExperiment;