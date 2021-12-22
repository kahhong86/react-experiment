import { useContext, useEffect, useState } from "react";
import FourthContext from "./context";

interface changeValue{
    list:string,
    check:boolean,
    edit:false,
}

//inputFromChild will be pass to parent
const FormInput = () => {
    const { data, setData } = useContext(FourthContext);
    const [ inputValue,setInputValue ] = useState<changeValue>({
        list:"",
        check: false,
        edit: false,
    });

    const handleChange = (e) => {
        setInputValue((prev)=> ({
            //...prev is important, return back the previous value. without this, it will only record one set of data.
            ...prev, 
            [e.target.name]: e.target.value,
            check:false,
            edit:false,
        }));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //pass value to context data that declare at main page
        setData([...data,inputValue]);
        e.target.list.value = '';
        setInputValue({
            list:"",
            check: false,
            edit: false,
        })
    }

    //Need to useEffect here. If not, the initial state will render error that it pass empty value to parent.
    useEffect(() => {
        setData(data);
    },[data])

    return(
        <form className="mb-10" onSubmit={handleSubmit}>
            <input className="border-2 border-black mr-3" onChange={handleChange} name="list" type="text" />
            <button className="bg-blue-500 rounded-xl px-2 text-white">+</button>
        </form>
    )
}

export default FormInput;