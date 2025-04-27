import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_Data } from "../utils/constants";
import { withOfferLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [RestaurantList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const IsOnline = useOnlineStatus();

  const RestaurantCardWithOffer = withOfferLabel(RestaurantCard);

  const {loggedInUser,setUserName} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_Data);
      const json = await data.json();
      setRestaurantsList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (!IsOnline) {
    return <h1>No Internet, Please check your Internet !!</h1>;
  }
  return RestaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" w-full flex flex-col justify-center">
      <div className="flex justify-center m-4">
        <input
        data-testid="searchInput"
          className="w-80 border-1 rounded-lg mx-2 p-2"
          placeholder="Search Restaurants"
          type="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-amber-300 px-4 py-2 rounded-lg mx-2 cursor-pointer"
          onClick={() => {
            setFilteredRestaurants(
              RestaurantList?.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText)
              )
            );
          }}
        >
          Search
        </button>
        <div>
          <button
            className="bg-amber-300 px-4 py-2 rounded-lg mx-2 cursor-pointer"
            onClick={() => {
              setFilteredRestaurants(
                RestaurantList?.filter((res) => res?.info?.avgRating > 4.5)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
        <input
          className="w-80 border-1 rounded-lg mx-2 p-2"
          type="search"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info?.
              aggregatedDiscountInfoV3 && restaurant?.info?.
              aggregatedDiscountInfoV3?.header ? (
              <RestaurantCardWithOffer resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
