import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantCard from "../utils/useRestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const RestaurantList = useRestaurantCard();
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(RestaurantList);
  const [searchText, setSearchText] = useState("");

  const IsOnline = useOnlineStatus();

  useEffect(() => {
    setFilteredRestaurants(RestaurantList);
  }, [RestaurantList]);

  if (!IsOnline) {
    return <h1>No Internet, Please check your Internet !!</h1>;
  }
  return RestaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" w-full flex flex-col justify-center">
      <div className="flex justify-center m-4">
        <input
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
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
