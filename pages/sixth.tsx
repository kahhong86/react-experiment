import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../src/components/layout";

const SixthExperiment: NextPage = () => {
    const DateTime = new Date().toLocaleTimeString('en-GB');

    const [newHour,setNewHour] = useState<number>(new Date().getHours());
    const [newMinute,setNewMinute] = useState<number>(new Date().getMinutes());
    const [newSecond,setNewSecond] = useState<number>(new Date().getSeconds());
    const [changeInput, setChangeInput] = useState<number>(1);
    const [useInput,setUseInput] = useState<number>(1);
    const [interData,setInterData] = useState<number>(new Date().getSeconds());

    useEffect(() => {
        let timerSec = setTimeout(() => {
            if(newSecond - useInput < 0){
                setNewSecond(60 + newSecond - useInput);
                setNewMinute(newMinute - 1);
            }else{
                setNewSecond(newSecond - useInput);
            }
        },1000);
        if(newMinute - newSecond < 0){
            setNewMinute(59)
            setNewHour(23);
        }
    },[newSecond]);

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

            <form onSubmit={handleSubmit} className="mt-5">
                <label htmlFor="inputValue">Interval Value: </label>
                <input type="text" name="intervalValue" onChange={handleChange} className="border-2 border-black"/>
                <button className="bg-blue-500 rounded-lg text-white py-1 px-5 ml-3">Submit</button>
            </form>
            
        </Layout>
    )
}

export default SixthExperiment;