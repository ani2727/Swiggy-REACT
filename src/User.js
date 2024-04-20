import {useState} from "react";

const User = ()=>
{
    const [count] = useState(0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Name: Anil</h1>
            <h1>Location: Basar</h1>
            <h1>Branch: CSE</h1>
        </div>
    )
}

export default User;