import { NextPage } from "next";
import Layout from "../src/components/layout";
import Form from "../src/components/fifth/form";
import { useState } from "react";
import Display from "../src/components/fifth/display";

interface FifthExperimentProps {
    childToParent: () => void;
}
const FifthExperiment: NextPage<FifthExperimentProps> = () => {
    const [data, setData] = useState('');

    const childToParent = (childdata) => {
        setData(childdata);
    }

    return (
        <Layout title="Fifth Experiment">
            <h1>Fifth Experiment (Fetch Weather API but from within)</h1>
            <Form childToParent={childToParent}/>
            <Display parentToChild={data}/>
        </Layout>
    )
}

export default FifthExperiment;