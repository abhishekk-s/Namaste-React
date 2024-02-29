import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { restId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + restId);
    const json = await data.json();
    setResInfo(json);
  };

  if (resInfo === null) return <Shimmer />;

  const { name,avgRatingString,costForTwoMessage,cuisines,sla } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{costForTwoMessage} - {avgRatingString}</h3>
      <h2>{cuisines.join(", ")}</h2>
      <h3>In {sla.deliveryTime } minutes</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {"Rs. "}{(item.card.info.price || item.card.info.defaultPrice )/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
