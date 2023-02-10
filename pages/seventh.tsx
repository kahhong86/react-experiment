import { NextPage } from "next";
import { FunctionComponent } from "react";
import Layout from "../src/components/layout";

interface SeventhProps{}

const Seventh:FunctionComponent<SeventhProps> = () => {
    const numbers = [1,2,3,4];
    const sum = numbers.reduce((result,item)=> {
        return result + item
    });

    const users = [
        {
          name: "Van Batchelder",
          city: "London",
          birthYear: 1998
        },
        {
          name: "Winter Rubino",
          city: "Madrid",
          birthYear: null
        },
        {
          name: "Yusuf Shea",
          city: "Paris",
          birthYear: 1990
        },
        {
          name: "Zion Shively",
          city: "Alabama",
          birthYear: 1990,
        }
    ];
    const currentYear = new Date().getFullYear();


    const userNames = users.reduce((filterUsers, user) => {
        console.log(filterUsers);
        if (user.birthYear && (currentYear - user.birthYear) > 25) {
            filterUsers.push(user.name);
        }
        return filterUsers;
    }, []); 

    console.log(users)

    return(
        <Layout title="Seventh Experiment">
            <h1>Seventh Experiment (Map, Filter, Reduce)</h1>

            <div className="block">
                <h2 className="font-bold text-xl">Map</h2>
                
                {users.map(({name,city,birthYear},index) => {
                    return(
                        <p key={index}>
                        <strong>Name:</strong><span> {name}</span> <br />
                        <strong>City:</strong><span> {city}</span> <br />
                        <strong>Birth Year:</strong><span> {birthYear}</span> <br /> <br />
                    </p>
                    )
                })}
            </div>
            <div className="block mt-5">
                <h2 className="font-bold text-xl">Reduce</h2>
                <p>{sum}</p>
                <p>{userNames}</p>
            </div>
        </Layout>
    )
}

export default Seventh;