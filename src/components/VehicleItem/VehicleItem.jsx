import { Button, Input } from "@vechaiui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const VehicleItem = ({
  image,
  id,
  price,
  name,
  year,
  description,
  onAddToCart,
  isDisbaled,
}) => {
  const [bidAmount, setBidAmount] = useState(undefined);
  const [formError, setFormError] = useState({
    error: false,
    message: "",
  });

  const onHandleChangeBidAmount = (e) => {
    setBidAmount(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const amount = Number(bidAmount);
    if (amount <= 0 || amount <= price || isNaN(amount)) {
      setFormError({ error: true, message: "Please enter a valid amount" });
      return;
    }
    setFormError({ error: false, message: "" });
    onAddToCart(id, amount);
    toast.success("Item has been added to cart");
  };

  return (
    <div className="flex flex-col gap-2 w-80 shadow-md rounded-md p-4 border-gray-200 border-[1px]">
      <img
        className="object-cover w-full h-32"
        src={
          image
            ? image
            : "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
        }
      />
      <Link to={`/vehicle?id=${id}`}>
        <h5 className="font-bold">
          {name} {year}
        </h5>
      </Link>
      <p>Price: {price} LKR</p>
      <p>{description}</p>
      <form
        onSubmit={onHandleSubmit}
        className="flex flex-col justify-center gap-2"
      >
        <div className="flex gap-2 items-center">
          <Input
            type="number"
            onChange={onHandleChangeBidAmount}
            value={bidAmount}
            placeholder="Enter bid amount"
            invalid={formError.error}
          />
          <div>LKR</div>
        </div>
        <Button
          onClick={onHandleSubmit}
          disabled={isDisbaled || !bidAmount}
          type="submit"
        >
          Submit
        </Button>
        {formError.error ? (
          <div className="text-red-500 text-sm">{formError.message}</div>
        ) : null}
      </form>
    </div>
  );
};

export default VehicleItem;
