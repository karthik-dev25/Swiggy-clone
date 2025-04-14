import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantsMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-bold m-2">{name}</h1>
      <h2 className="m-2">{cuisines.join(", ")}</h2>
      <h3 className="m-2">{costForTwoMessage}</h3>
      <h3 className="font-bold m-2 underline">Menu Items</h3>
      <ul className="m-2 p-4">
        {itemCards?.map((item) => (
          <li className="flex justify-between items-center m-4 p-4 bg-gray-100" key={item?.card?.info?.id}>
            <p>{item?.card?.info?.name} - {item?.card?.info?.price}</p>
            <p className="text-2xl cursor-pointer">+</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;
