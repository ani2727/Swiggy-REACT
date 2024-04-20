
import RestaurantCard,{withPromotedLabel}  from "./RestaurantCard.js"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {

    const [listofRestaurantsJS, setlistofRestaurantsJS] = useState([]);
    const [filteredListofRestaurant,setFilteredListofRestaurants] = useState([]);

    const [searchText,setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async() => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

      const json = await data.json();

      //optional chaining
      setlistofRestaurantsJS(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you're offline, please check your internet connection</h1>
  
  //conditional rendering
  if(listofRestaurantsJS.length === 0) return <Shimmer/>

    return (
        <div className="body">
            <div className="flex">
                <div className="m-4 p-4">
                  <input type="text" className="border border-solid-2 rounded-md border-black" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                  }} />
                  <button className="m-1 px-4 py-1 text-white rounded-lg bg-gray-400" 
                    onClick={()=>
                      {
                        const filteredList = listofRestaurantsJS.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredListofRestaurants(filteredList);
                    }}
                  >Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                  <button className=" px-2 py-1 bg-gray-400 text-white rounded-md " onClick={()=>
                    {
                        const filteredList = listofRestaurantsJS.filter
                        (
                          (res)=> res.info.avgRating > 4.5
                        );
                        setFilteredListofRestaurants(filteredList)
                    }
                    } >
                    Top Rated Restaurants</button>
                </div>

                
            </div>
            <div className="res-container pl-8 flex flex-wrap">
                {
                    filteredListofRestaurant.map((restaurant)=> 
                    (
                        <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                          {restaurant.info.isOpen? <RestaurantCardPromoted resData = {restaurant} />: <RestaurantCard resData = {restaurant} />}
                          </Link>
                    ))
                }
                
            </div>
        </div>
    )
}


export default Body;