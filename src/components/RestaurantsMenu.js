import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import AccordianCard from "./AccordianCard";
import React from "react";
const RestaurantsMenu = () => {
  const [showIndex, setShowIndex] = React.useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, totalRatingsString } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const menuItems =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="w-8/12 m-auto my-4 text-center">
      <h1 className="m-4 font-bold text-3xl text-center">{name}</h1>
      <span className="text-xl p-4 shadow-lg">
        ⭐ +{totalRatingsString} - {costForTwoMessage}
      </span>
      <div className="my-8">
        {menuItems?.map((item,index) => (
          <div key={item?.card?.card?.title}>
            <AccordianCard data={item?.card?.card} showIndex={index=== showIndex && true} setShowIndex={()=>setShowIndex((prevState)=> prevState === index ? null : index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsMenu;
