import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
const RestaurantsMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    console.log("json: ", json);
    setResInfo(json);
    console.log(json?.data?.cards[2]?.card?.card?.info);
    // console.log(json?.data?.cards[4]?.groupedCard?.groupCardMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
  };
  if (resInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log('itemCards: ', itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards?.map((item)=> <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.price}</li>)}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;
