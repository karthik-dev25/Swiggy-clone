const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime },
  } = props?.resData?.info;

  return (
    <div className="w-[250px] h-[65vh] m-4 p-2 bg-gray-100 hover:bg-gray-200">
      <img className="w-56 h-56" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
      <h3 className="font-bold py-2">{name}</h3>
      <p>{avgRating} Star</p>
      <p>{cuisines.join(",")}</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} Minutes</p>
    </div>
  );
};

export default RestaurantCard;
