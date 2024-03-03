//import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = (props) => {
  //Uncontrolled Component

  //const [showItems, setShowItems] = useState(false);
  //   const handleCick = () => {
  //     setShowItems(!showItems);
  //   };

  // controlled component
  const { itemCards, title } = props.data;
  const { showItems, setShowIndex } = props;
  const handleClick = () => {
    setShowIndex();
    console.log(showItems);
  };

  return (
    <div>
      <div className="mx-auto my-4 w-6/12 bg-slate-50 shadow-lg p-3 ">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-semibold text-lg">{title}</span>
          <span className="font-semibold text-lg">⏬</span>
        </div>
        {showItems && <ItemsList items={itemCards}></ItemsList>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
