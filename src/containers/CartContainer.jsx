import React from "react";

import { useSelector } from "react-redux";
import { selectItems } from "../store/slices/cartSlice";
import { CartItem } from "../components/CartItem";

const CartContainer = () => {
  const cartItems = useSelector(selectItems);

  console.log(cartItems);

  const total = cartItems.reduce((prev, curr) => prev + curr.bidAmount, 0);

  return (
    <div className="flex flex-col gap-2 items-center">
      <h2 className="font-semibold text-2xl mb-10">Biddings</h2>
      {cartItems.map((i) => (
        <CartItem
          key={i.id}
          image={
            i.details.image
              ? i.details.image
              : "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
          }
          name={i.details.brand}
          year={i.details.manufactureYear}
          price={i.bidAmount}
        />
      ))}
      <div>
        <span className="font-bold">Total:</span> {total} LKR
      </div>
    </div>
  );
};

export default CartContainer;
