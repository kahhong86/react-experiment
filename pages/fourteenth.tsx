import { useEffect, useState } from "react";
import Layout from "../src/components/layout";

const Fourteenth = () => {
    const [temp,setTemp] = useState<string>("");
    const [field,setField] = useState<string>("");

    const handleChange = (e) => {
        setField(e);
    }

    useEffect(() => {
        const getInput = setTimeout(()=> {
            handleChange(temp);
        },2000)

        return () => clearTimeout(getInput);
    },[temp]);

    return(
        <Layout title="Fourteenth Experiment">
            <h1>Search Function (Debounce)</h1>
            <input type="text" className="border border-black" onChange={(e)=>setTemp(e.target.value)}/>
            <span className="text-sm italic block mt-5">Result will only appear after 2 secs</span>
            <div className="bg-gray-200 p-2">
                {field}
            </div>
        </Layout>
    )
}

export default Fourteenth;