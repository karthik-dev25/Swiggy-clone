import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime },
  } = props?.resData?.info;

  const {loggedInUser} = useContext(UserContext)

  return (
    <div className="w-[250px] h-[65vh] m-4 p-2 bg-gray-100 hover:bg-gray-200">
      <img className="w-58 h-56" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
      <h3 className="font-bold py-2">{name}</h3>
      <p>{avgRating} Star</p>
      <div className="w-12">{cuisines.join(",")}</div>
      <p>{costForTwo}</p>
      <p>{deliveryTime} Minutes</p>
      <p>{loggedInUser}</p>
    </div>
  );
};

export const withOfferLabel = (RestaurantCard) =>{
  return (props)=>{
    return (
      <div>
        <label className="absolute mt-48 ml-6 text-white font-bold bg-black p-1">{props?.resData?.info?.
          aggregatedDiscountInfoV3?.header + " " + props?.resData?.info?.
          aggregatedDiscountInfoV3?.header}</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
