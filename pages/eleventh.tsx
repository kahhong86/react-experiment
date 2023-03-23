import { FunctionComponent, useEffect, useState } from "react";
import Layout from "../src/components/layout";

interface EleventhProps{}
interface promiseArray{}

const Eleventh:FunctionComponent<EleventhProps> = () => {
    const [ text, setText ] = useState<promiseArray[]>([]);

    const multiply = (number) => {
        if(number > 0) {
            return number * number;
        } else {
            return "Error while multiplying";
        }
    };

    const getPromise = (value) => {
        return new Promise((resolve, reject) => {
            const result = multiply(value);
            if(typeof result === "number") {
                resolve(result);
            } else {
                reject(result)
            }
        });
    };
    
    const print = text.map((list,index) => {
        return(
            <p key={index}>{list}</p>
        )
    });

    useEffect(() => {
        getPromise(4)
        .then((result) => {
            setText(oldArray => [...oldArray,result])
        }) // 16
        .catch(error => {
            setText(oldArray => [...oldArray,error])
        });

        getPromise(-5)
        .then(result => {
            setText(oldArray => [...oldArray,result])
        })
        .catch(error => {
            setText(oldArray => [...oldArray,error])
        }); // Error while multiplying
    },[])
      
    

    return(
        <Layout title="Eleventh">
            <h1>Experiment 11 (Promise and Async/Await)</h1>
            <h2 className="font-bold">Promise</h2>
            <div className="mb-10">
                {print}
            </div>
            <h2 className="font-bold">Async / Await</h2>

        </Layout>
    )
}

export default Eleventh;