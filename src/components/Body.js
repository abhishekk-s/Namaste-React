import RestCard from "./RestCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.data.avgRating >= 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="restore-btn"
          onClick={() => {
            setRestaurantList(resList);
          }}
        >All Restaurants</button>
      </div>
      <div className="res-container">
        {restaurantList.map((res) => (
          <RestCard key={res.data.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
