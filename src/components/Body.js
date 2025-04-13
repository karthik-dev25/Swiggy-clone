import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantCard from "../utils/useRestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const RestaurantList = useRestaurantCard();
  console.log("RestaurantList: ", RestaurantList);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(RestaurantList);
  console.log("filteredRestaurants: ", filteredRestaurants);
  const [searchText, setSearchText] = useState("");

  const IsOnline = useOnlineStatus();
  console.log("IsOnline: ", IsOnline);

  useEffect(() => {
    setFilteredRestaurants(RestaurantList);
  }, []);

  if (!IsOnline) {
    return <h1>No Internet, Please check your Internet !!</h1>;
  }
  return RestaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          className="search-input"
          placeholder="Search Restaurants"
          type="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
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
      </div>
      <div className="search">
        <button
          onClick={() => {
            setFilteredRestaurants(
              RestaurantList?.filter((res) => res?.info?.avgRating > 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
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
