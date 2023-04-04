import { FunctionComponent, useEffect, useState } from "react";
import Layout from "../src/components/layout";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
    Title,
} from 'chart.js';
import { Chart,Bar } from 'react-chartjs-2';
  
ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
    Title
);

interface TwelfthProps{}

interface BuildProps{
    labels:string[],
    datasets:DatasetsProps[]
}

interface DatasetsProps{
    type:any,
    label:string,
    data:number[],
    borderColor:string,
    borderWidth:number,
    fill:boolean,
}

const TwelfthExperiment:FunctionComponent<TwelfthProps> = () => {
    

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Elden Ring Build',
            },
        },
    };
      
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
    const data = {
        labels: ["Early","Mid","Late","End","Cramp Area","Open Area","Sustainability","Mobs","Bosses"],
        datasets: [
            {
                type: 'line' as const,
                label: 'Melee Build',
                data: [6,7,8,9,10,8,9,10,3],
                borderColor: 'rgb(255, 99, 132, 0.8)',
                borderWidth: 2,
                fill: true,
            },
            {
                type: 'line' as const,
                label: 'Range Build',
                data: [8,9,10,10,3,10,6,6,9],
                borderColor: 'rgb(99, 255, 132, 0.8)',
                borderWidth: 2,
                fill: true,
            },
            {
                type: 'line' as const,
                label: 'Balance Build',
                data: [5,6,7,8,3,10,8,5,8,8],
                borderColor: 'rgb(99, 132, 255, 0.8)',
                borderWidth: 2,
                fill: false,
            },
        ],
    };

    const [tempChart, setTempChart] = useState<BuildProps>(data);
    
    

    // const handleChange = (e) => {
    //     setTempValue(Number(e.target.value));
    // }

    // const handleSubmit = () => {
    //     console.log('tempvalue ',tempValue)
    //     setNewValue(tempValue);
    //     console.log('newvalue ', newValue)
    // }

    // const handleMonth = () => {
    //     console.log('tempchart ', tempChart)
    //     setTempChart(data);
    // }

    // const handleGame = () => {
    //     console.log('tempchart ', tempChart)
    //     setTempChart(data2);
    // }

    // useEffect(() => {
    //     setTempChart(data);
    // },[])

    return (
        <Layout title="Twelfth Experiment">
            <h1>Chart JS</h1>
            <Chart type="bar" options={options} data={tempChart} />
            <span>Month </span>
            {/* <input type="text" onChange={handleChange} className="border-2 border-black"/>  */}
            {/* <button className="bg-blue-500 px-2 ml-2 text-white mb-5" onClick={handleSubmit}>Submit</button> */}
            <br />
            {/* <button className="bg-red-500 px-2 ml-2 text-white" onClick={handleMonth}>Month</button> 
            <button className="bg-green-500 px-2 ml-2 text-white" onClick={handleGame}>Game</button> */}
        </Layout>
    )
}

export default TwelfthExperiment;