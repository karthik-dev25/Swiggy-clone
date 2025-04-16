import React from "react";
// import React, { useState } from "react";
import ItemsList from "./ItemsList";

const AccordianCard = ({data,showIndex,setShowIndex}) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div key={data?.title}>
      <div className="w-9/12 m-auto p-2 shadow-lg my-2">
        <div
          className="flex justify-between p-4 cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>🔽</span>
        </div>
        {showIndex && (
          <div>
            {data?.itemCards?.map((item) => (
              <div key={item?.card?.info?.id}>
                <ItemsList data={item?.card?.info}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordianCard;
