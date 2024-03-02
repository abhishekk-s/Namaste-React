//import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({data,showItems, setShowIndex}) => {
  //const [showItems, setShowItems] = useState(false);
  //   const handleCick = () => {
  //     setShowItems(!showItems);
  //   };
  const { title, itemCards,  } = data;
  const handleCick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="mx-auto my-4 w-6/12 bg-slate-50 shadow-lg p-3 ">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleCick}
        >
          <span className="font-semibold text-lg">
            {title} ({itemCards.length})
          </span>
          <span className="font-semibold text-lg">⏬</span>
        </div>
        {showItems && <ItemsList items={itemCards}></ItemsList>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
