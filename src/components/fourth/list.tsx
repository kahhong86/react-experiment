import { useContext,useState } from "react";
import FourthContext from "../fourth/context"
import { dataCollection } from "../../../libs/apiType";

const Listing = () => {
    const { data,setData } = useContext(FourthContext);
    const [ newValue,setNewValue ] = useState<any>();

    const onCheckList = (index) => {
        // e.target.check 
        const newData:dataCollection = [...data];
        if(newData[index].check){
            newData[index].check = false;
        }else{
            newData[index].check = true;
        }
        setData(newData);
    }

    const deleteItem = (index) => {
        const newData = [...data];
        newData.splice(index,1) //Remove the specific array item.
        setData(newData); //Inside the new array that has been removed.
    }

    const editItem = (index) => {
        const newData = [...data];
        setNewValue(newData[index]); //Pass current data to newValue. When edit change, it has the previous data such as, check: true/false etc.
        newData[index].edit = true; //To check which line of array needs to be edit.
        setData(newData);
    }

    const updateItem = (index) => {
        const newData = [...data];
        newData[index] = newValue; //Update specific array with new value.
        newData[index].edit = false; //To check which line of array that has been edited and remove the edit button.
        setData(newData);
    }

    //This function to change new value of our current listing
    const handleChange = (e) => {
        setNewValue((prev) => ({
            ...prev, 
            [e.target.name]: e.target.value,
            edit:false,
        }));
    }

    const printList = data.map((list,index) => {
        return(
            <div key={index} className="mb-2 relative border-b-2 pb-2">
                <input className="mr-2 inline-block relative" type="checkbox" name="check" defaultChecked={list.check} onChange={()=> (onCheckList(index))}/>
                {/* This condition is to show when the line is being edit or save */}
                { list.edit ?
                    <>
                        <input type="text" name="list" defaultValue={list.list} onChange={handleChange} className="border-2"/>
                        <div className="block my-2">
                            <button className="bg-blue-500 rounded-xl px-2 text-white w-14" onClick={() => updateItem(index)}>Save</button> 
                            <button className="bg-gray-300 ml-2 text-white px-2 rounded-xl">Delete</button>
                        </div>
                    </>
                    :
                    <>  
                        <span className={`border-2 border-transparent relative inline-block ${list.check === true? "line-through text-red" : ""}`}>{list.list}</span>
                        <div className="block my-2">
                            <button className="bg-blue-500 rounded-xl px-2 text-white w-14" onClick={() => editItem(index)}>Edit</button>
                            <button onClick={() => deleteItem(index)} className="bg-red-500 text-white px-2  ml-2 rounded-xl">Delete</button>
                        </div>
                    </> 
                }
            </div>
        )
    });

    return(
        <div>
            <h2 className="font-bold border-b-2 border-black mb-2">To Do List</h2>
            {printList}
        </div>
    )
}

export default Listing;