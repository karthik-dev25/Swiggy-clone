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
    <div className="card-container">
      <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{avgRating} Star</p>
      <p>{cuisines.join(",")}</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} Minutes</p>
    </div>
  );
};

export default RestaurantCard;
