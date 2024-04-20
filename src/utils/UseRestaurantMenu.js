import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const UseRestaurantMenu = (resId) => {

    const [menus,setMenu] = useState(null);

    useEffect(()=>
    {
        fetchData();
    },[])

    const fetchData = async() =>{

        const data = await fetch(API_URL+resId);
        const json = await data.json();

        setMenu(json.data);
    };

    return menus;
}

export default UseRestaurantMenu;