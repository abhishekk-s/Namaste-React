import RestCard, { withPromotedLabel } from "./RestCard";
import { useState, useEffect, useContext } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestCard";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState();
  const { loggedInUser, setUser } = useContext(UserContext);

  const PromotedRestCard = withPromotedLabel(RestCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();
    const rest = await json?.data?.cards[4]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;
    setRestaurantList(rest);
    setFilteredRestaurant(rest);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div>
        <h1>Looks like you're offline !! </h1>
        <h1>Please check your internet connection.</h1>
      </div>
    );

  console.log(filteredRestaurant.length);

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black px-2"
            value={searchText}
            onChange={(x) => setSearchText(x.target.value)}
          />
          <button
            className="px-4 py-1 bg-blue-300 m-4 rounded-md"
            onClick={() => {
              const filteredRest = restaurantList.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText?.toLowerCase()) ||
                  res.info.cuisines.includes(searchText)
              );
              setFilteredRestaurant(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-1 bg-blue-300 m-4 rounded-md"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (res) => res.info.avgRating >= 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 py-1 bg-blue-300 m-4 rounded-md"
            onClick={() => {
              setFilteredRestaurant(restaurantList);
            }}
          >
            All Restaurants
          </button>
        </div>
        <label className="px-2 font-semibold">UserName :</label>
        <input
          className="border border-solid border-black p-0.5"
          value={loggedInUser}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res.info.veg ? (
              <PromotedRestCard resData={res} />
            ) : (
              <RestCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
