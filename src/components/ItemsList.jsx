import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { additem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(additem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="food-items"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
            </div>
            <span>
              {"Rs. "}
              {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100}
            </span>
            <p className="py-6 text-sm">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="mx-auto px-4 bg-green-200 shadow-lg rounded-md p-1"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-100px"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
