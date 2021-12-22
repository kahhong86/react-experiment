import Layout from "../src/components/layout"
import { createContext, useEffect, useState } from "react";
import FormInput from "../src/components/fourth/input";
import FourthContext from "../src/components/fourth/context";
import Listing from "../src/components/fourth/list";
import Info from "../src/components/fourth/info";
import { dataCollection } from "../libs/apiType";

const FourthExperiment = () => {
    const [ data, setData ] = useState<dataCollection>([]);
    const states = {
        data, setData
    }

    return(
        <FourthContext.Provider value={states}>
            <Layout title="Fourth Experiment: To do App">
                <h1>Fourth Experiment (useContext to pass value between components)</h1>
                <FormInput />
                <Listing />
                <Info />
            </Layout>
        </FourthContext.Provider>
        
    )
}

export default FourthExperiment