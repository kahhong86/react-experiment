import { FunctionComponent, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from './app/hooks';
import { createList,deleteItem } from "./features/counterSlice";
import sampleReducer from "./features/messageSlice";
import { useState } from "react";

interface CounterProps{
    
}

const Counter:FunctionComponent<CounterProps> = () => {
    const count = useAppSelector((state) => state.counter.value);
    const msg = useAppSelector((state) => state.counter.message);
    const data = useAppSelector((state) => state.counter.data);
    const dispatch = useAppDispatch();
    const [list,setList] = useState<string>("");

    useEffect(() => {
        console.log('msg',msg);
        console.log('data',data);
    },[data]);

    return(
        <div>
            <input className="border-black border mr-2 p-1" type="text" value={list} onChange={e => setList(e.target.value)} />
            <button className="bg-blue-500 py-1 px-3 text-white" onClick={() => dispatch(createList(list))}>Submit</button>
            <ul className="ml-4 mt-2">
                {data.map((list,index) => {
                    return(
                        <li className="list-disc" key={index}>
                            {list} <br />
                            <button className="bg-red-500 p-1 text-sm text-white" onClick={() => dispatch(deleteItem(index))}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Counter;
