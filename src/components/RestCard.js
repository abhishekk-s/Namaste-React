import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300" data-testid="resCard">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestCard) => {
  return (props) => {
    return (
      <div>
        <label className="p-2 m-2 absolute bg-green-500 text-black rounded-lg">Pure Veg</label>
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
