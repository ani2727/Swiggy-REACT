
import { IoStar } from "react-icons/io5"
import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId,id,name,cuisines,avgRating,sla,costForTwo} = resData.info;

        return (
            <div className="res-card p-1 m-4 w-56 h-[28rem] bg-gray-200 hover:bg-gray-300 rounded-lg">
                
                <img className="res-logo rounded-lg" alt="FoodItem" src= {CDN_URL+cloudinaryImageId} />
                <h4 className="py-4 text-lg font-bold">{name}</h4>
                {/* <p className="flex flex-wrap">{cuisines.join(",")}</p> */}
                <h4>{costForTwo}</h4>
                <h4 className="py-1 flex items-center">{avgRating}<IoStar /></h4>
                <h4>{sla.deliveryTime+" Minutes"}</h4>
            </div>
        )
}

export const withPromotedLabel = (RestaurantCard)=> {

        return (props) => {
                return (
                    <div>
                        <label className="absolute bg-black text-white ml-4 p-1 rounded-lg">Promoted</label>
                        <RestaurantCard {...props}/>
                    </div>
                );
        };
};


export default RestaurantCard;
