import React from "react";

class UserClass extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            info: "Dummy",
        }
    }
async componentDidMount()
{
    const data = await fetch("https://api.github.com/users/ani2727");

    const json = await data.json();

    this.setState(
        {
            info: json,
        }
    )
    console.log(json);
}
   
    render() 
    {
        const {name, public_repos, id,avatar_url} = this.state.info;
        return (
            <div>
                <img src={avatar_url}/>
                <h1>Name: {name}</h1>
                <h1>public_repos: {public_repos}</h1>
                <h1>Contact: {id}</h1>
            </div>
        )
    }
}

export default UserClass;