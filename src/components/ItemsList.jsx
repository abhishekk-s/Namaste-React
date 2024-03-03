import { CDN_URL } from "../utils/constants";

const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
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
              <button className="mx-8 my-28 px-6 bg-green-400 shadow-lg rounded-md p-2">
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
