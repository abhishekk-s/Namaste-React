import RestCard from "./RestCard";
import { useState, useEffect } from "react";
//import resList from "../utils/mockData";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState();

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

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(x) => setSearchText(x.target.value)}
          />
          <button
            className="search-btn"
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
        <button
          className="filter-btn"
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
          className="restore-btn"
          onClick={() => {
            setFilteredRestaurant(restaurantList);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((res) => (
          <RestCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
