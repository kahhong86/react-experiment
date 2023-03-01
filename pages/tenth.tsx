import { FunctionComponent } from "react";
import { Provider } from "react-redux";
import Layout from "../src/components/layout";
import Counter from "../src/components/tenth/Counter";
import { store } from "../src/components/tenth/app/store";

interface TenthProps{
    counter:number
}

const TenthExperiment:FunctionComponent<TenthProps> = () => {

    return(
            <Provider store={store}>
                <Layout title="Redux">
                    <h1>Redux</h1>
                    <Counter />
                </Layout>
            </Provider>
            
        
    )
}

export default TenthExperiment;