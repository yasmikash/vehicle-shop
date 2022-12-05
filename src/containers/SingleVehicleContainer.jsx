import { Button, Input } from "@vechaiui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart, selectItems } from "../store/slices/cartSlice";
import { selectVehicles } from "../store/slices/vehicleSlice";

const SingleVehicle = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const vehicles = useSelector(selectVehicles);
  const cartItems = useSelector(selectItems);

  const [selectedItem, setSelectedItem] = useState(undefined);
  const [bidAmount, setBidAmount] = useState(null);
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
    if (amount <= 0 || amount <= selectedItem.details.price || isNaN(amount)) {
      setFormError({ error: true, message: "Please enter a valid amount" });
      return;
    }
    setFormError({ error: false, message: "" });
    dispatch(addToCart({ item: selectedItem, amount }));
    toast.success("Item has been added to cart");
  };

  useEffect(() => {
    const itemId = searchParams.get("id");
    if (itemId) {
      const item = vehicles.find((v) => v.id === itemId);
      setSelectedItem(item);
    }
  }, [vehicles]);

  return (
    <div className="flex flex-col gap-4">
      <Link to="/">
        <Button className="w-32">Back</Button>
      </Link>
      {selectedItem && (
        <div className="flex gap-4 justify-center">
          <img
            className="w-[700px] h-[500px]"
            src={
              selectedItem.details.image
                ? selectedItem.details.image
                : "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
            }
          />
          <div>
            <h3 className="text-xl font-bold mb-8">
              {selectedItem.details.brand}{" "}
              {selectedItem.details.manufactureYear}
            </h3>
            <h5 className="font-bold mb-4">Description</h5>
            <p className="mb-4">{selectedItem.details.description}</p>
            <p className="mb-4">Price: {selectedItem.details.price} LKR</p>
            <div className="flex gap-2 items-center mb-8">
              <div>Color:</div>
              <div
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: selectedItem.details.color }}
              ></div>
            </div>
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
                //   disabled={bidAmount ? bidAmount.length : true}
                disabled={!!cartItems.find((i) => i.id === selectedItem.id)}
                type="submit"
              >
                Submit
              </Button>
              {formError.error ? (
                <div className="text-red-500 text-sm">{formError.message}</div>
              ) : null}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleVehicle;
