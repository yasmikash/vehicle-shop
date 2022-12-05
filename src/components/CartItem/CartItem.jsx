import React from "react";

const CartItem = ({ name, image, year, price }) => {
  return (
    <div className="flex gap-2 rounded-md shadow-md p-4 justify-between w-4/12 border-gray-200 border-[1px]">
      <img className="object-cover w-32 h-14" src={image} />
      <div>
        <h4 className="font-bold">
          {name} {year}
        </h4>
        <p>{price} LKR</p>
      </div>
    </div>
  );
};

export default CartItem;
