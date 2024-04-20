import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import UseRestaurantMenu from "../utils/UseRestaurantMenu";
import { IoStarSharp } from "react-icons/io5";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => 
{
    const {resId} = useParams();

    const menu = UseRestaurantMenu(resId);
    

    if(menu === null) return <Shimmer />

    // const {itemCards} = menu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    const ItemCategories = menu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"] === 
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(ItemCategories);


    const {name ,cuisines,costForTwoMessage,avgRating} = menu?.cards[2]?.card?.card?.info;

    return (    
        <div className="menu-items text-center">
                <h1 className="font-bold my-5 text-3xl">{name}</h1>
                <h2 className="font-bold text-lg">{cuisines.join(",")}</h2>
                <h2 className="font-bold text-lg">{costForTwoMessage}</h2>
                <h2 className="font-bold text-lg flex ml-[610px] text-center">Avg-Rating:{avgRating}<IoStarSharp /></h2>

                {
                    ItemCategories.map((category)=>(<RestaurantCategory key={category?.card?.card?.title}
                                     data={category?.card?.card}
                                      />))
                }
        </div>
    );
}

export default RestaurantMenu;