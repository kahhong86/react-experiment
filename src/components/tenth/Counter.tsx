import { FunctionComponent, useEffect } from "react";
import { useAppSelector, useAppDispatch } from './app/hooks';
import { createList, deleteItem ,editItem, updateItem, checkItem} from "./features/counterSlice";
import { useState } from "react";

interface CounterProps{}
interface inputValueProps{
    message:string,
    edit:boolean,
    check:boolean,
}
interface tempArray{
    message:string,
    index:number
}

const Counter:FunctionComponent<CounterProps> = () => {
    const data = useAppSelector((state) => state.counter.data);
    const dispatch = useAppDispatch();
    const [newInputValue, setNewInputValue] = useState<tempArray>();
    const [inputValue, setInputValue] = useState<inputValueProps>({
        message:"",
        edit: null,
        check: null,
    });

    const handleChange = (e) => {
        setInputValue((prev)=> ({
            //...prev is important, return back the previous value. without this, it will only record one set of data.
            ...prev, 
            message: e.target.value,
            edit:false,
            check: false,
        }));
    }

    const editChange = (value,e) => {
        const newData:tempArray = {message:value.target.value, index:e}
        setNewInputValue(newData);
    }

    const printList = data.map((list,index) => {
        return(
            <li className="mb-2 relative border-b-2 pb-2" key={index}>
                <input type="checkbox" defaultChecked={list.check} name="check" onChange={() => dispatch(checkItem(index))}/>
                { list.edit ? 
                    <>
                        <input type="text" className="border-2 mb-2" defaultValue={list.message} onChange={(value) => editChange(value,index)}/> <br />
                        <button className="bg-blue-500 rounded-xl px-2 text-white w-14" onClick={() => dispatch(updateItem(newInputValue))}>Save</button>
                    </>
                    :
                    <>
                        <span className={`border-2 border-transparent relative inline-block mb-2 ${list.check === true ? " line-through " : "aa"}`}>{list.message}</span> <br />
                        <button className="bg-blue-500 rounded-xl px-2 text-white w-14" onClick={() => dispatch(editItem(index))}>Edit</button>
                    </>
                }
                <button className="bg-red-500 text-white px-2  ml-2 rounded-xl" onClick={() => dispatch(deleteItem(index))}>Delete</button>
            </li>
        )
    })

    const info = data.filter(info => info.check == false);

    return(
        <div className="mb-2 relative pb-2">
            <div className="mb-10">
                <input className="border-2 border-black mr-3" type="text" onChange={handleChange} />
                <button className="bg-blue-500 py-1 px-3 text-white" onClick={() => dispatch(createList(inputValue))}>Submit</button>    
            </div>
            <h2 className="font-bold border-b-2 border-black mb-2">To Do List</h2>
            <ul className="mt-2">
                {printList}
                {info.length == 0 ? "You have no task" : info.length == 1 ? "You have 1 task" : info.length >= 2 ? "You have " + info.length + " tasks" : ""}
            </ul>
        </div>
    )
}

export default Counter;
