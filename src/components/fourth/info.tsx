import { FunctionComponent, useContext, useEffect, useState } from "react";
import FourthContext from "./context";

interface Infoprops{};

const Info:FunctionComponent<Infoprops> = () => {
    const { data,setData } = useContext(FourthContext);

    //Filter for checkbox untick state.
    const result = data.filter(count => 
        count.check === false //This condition to check if checkbox is uncheck only.
    );

    return(
        <div className="">
            {result.length === 1 ? "You have pending 1 task" : ""}
            {result.length > 1 ? `You have pending ${result.length} tasks` : ""}
            {data.length === 0 ? "You have no task" : ""}
            {result.length === 0 && data.length !== 0 ? "You have completed all your tasks" : ""}
        </div>
    )
}

export default Info;