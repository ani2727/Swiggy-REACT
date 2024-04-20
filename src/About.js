import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props) {
        super(props);
    }
    
    
    render()
    {
        return (
            <div>
                <h1>About Page</h1>
                <h2>Hello From About Page</h2>
                <UserClass name="Anil" Location="Medak" Contact="@ani2727"/>
            </div>
        )
    }
}
    

export default About;