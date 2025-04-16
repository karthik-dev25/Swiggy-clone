import { MENU_IMG_URL } from "../utils/constants";

const ItemsList = ({ data }) => {
  return (
    <div className="flex border-b-1">
      <div className="w-9/12 text-left p-4">
        <div>{data?.name}</div>
        <div>{data?.price ? data?.price / 100 : data?.defaultPrice}</div>
        <p className="text-xs">{data?.description}</p>
      </div>
      <div className="w-3/12">
        <button className="absolute mt-24 shadow-lg bg-white p-2 rounded-lg">
          ADD
        </button>
        <img className="w-38 m-4" src={MENU_IMG_URL + data?.imageId} />
      </div>
    </div>
  );
};

export default ItemsList;
