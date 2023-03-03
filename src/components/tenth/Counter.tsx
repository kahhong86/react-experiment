import { FunctionComponent, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from './app/hooks';
import { createList, deleteItem ,editItem, updateItem} from "./features/counterSlice";
import sampleReducer from "./features/messageSlice";
import { useState } from "react";

interface CounterProps{
    
}
interface inputValueProps{
    message:string,
    edit:boolean,
}

const Counter:FunctionComponent<CounterProps> = () => {
    const count = useAppSelector((state) => state.counter.value);
    const msg = useAppSelector((state) => state.counter.message);
    const data = useAppSelector((state) => state.counter.data);
    const dispatch = useAppDispatch();
    const [list,setList] = useState<string>("");
    const [newInputValue, setNewInputValue] = useState<any>(({
        message:"",
        edit:false,
    }));
    const [inputValue, setInputValue] = useState<inputValueProps>({
        message:"",
        edit:false,
    });

    const handleChange = (e) => {
        setInputValue((prev)=> ({
            //...prev is important, return back the previous value. without this, it will only record one set of data.
            ...prev, 
            message: e.target.value,
            edit:false,
        }));
    }

    const editChange = (value,e) => {
        const newData = [...data];
        const newValue = {message: value.target.value, edit: false}
        newData[e] = newValue;
        setNewInputValue(newData);
        console.log(newInputValue);
    }

    return(
        <div className="mb-2 relative pb-2">
            <div className="mb-10">
                <input className="border-2 border-black mr-3" type="text" onChange={handleChange} />
                <button className="bg-blue-500 py-1 px-3 text-white" onClick={() => dispatch(createList(inputValue))}>Submit</button>    
            </div>
            <h2 className="font-bold border-b-2 border-black mb-2">To Do List</h2>
            <ul className="mt-2">
                {data.map((list,index) => {
                    return(
                        <li className="mb-2 relative border-b-2 pb-2" key={index}>
                            { list.edit ? 
                                <>
                                    <input type="text" className="border-2 mb-2" defaultValue={list.message} onChange={(value) => editChange(value,index)}/> <br />
                                    <button className="bg-blue-500 rounded-xl px-2 text-white w-14" onClick={() => dispatch(updateItem(newInputValue))}>Save</button>
                                </>
                                :
                                <>
                                    <span className="border-2 border-transparent relative inline-block mb-2">{list.message}</span> <br />
                                    <button className="bg-blue-500 rounded-xl px-2 text-white w-14" onClick={() => dispatch(editItem(index))}>Edit</button>
                                </>
                            }
                            <button className="bg-red-500 text-white px-2  ml-2 rounded-xl" onClick={() => dispatch(deleteItem(index))}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Counter;
