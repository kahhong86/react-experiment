import { NextPage } from "next";
import { useState } from "react";

interface formInfo{
    city: string,
    country: string
}

const Form:NextPage = ({childToParent}:any) => {
    const [formData, setFormData] = useState<formInfo>()

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="block md:inline-block">
                <label htmlFor="city">City: </label>
                <input type="text" onChange={handleChange} name="city" className="border-2 border-black"/>
            </div>
            <div className="block md:inline-block md:ml-5 mr-5">
                <label htmlFor="country">Country: </label>
                <input type="text" onChange={handleChange} name="country" className="border-2 border-black"/>
            </div>
            <button className="bg-blue-500 px-2 py-1 text-white rounded-xl" onClick={()=> childToParent(formData)}>Submit</button>
        </form>
    )
}

export default Form;