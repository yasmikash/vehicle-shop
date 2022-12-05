import { Select } from "@vechaiui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import VehicleItem from "../components/VehicleItem/VehicleItem";
import { addToCart, selectItems } from "../store/slices/cartSlice";
import { fetchVehciles, selectVehicles } from "../store/slices/vehicleSlice";

const carBrands = ["Volkswagen", "Audi", "Ford", "Mercedes", "BMW"];

const HomePageContainer = () => {
  const dispatch = useDispatch();

  const [selectedBrand, setSelectedBrand] = useState(null);

  const vehicles = useSelector(selectVehicles);
  const cartItems = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchVehciles(selectedBrand));
  }, [selectedBrand]);

  const onHandleAddToCart = (id, bidAmount) => {
    const item = vehicles.find((v) => v.id === id);
    dispatch(addToCart({ item, bidAmount }));
  };

  const onHandleChangeBrand = (e) => {
    const value = e.target.value;
    setSelectedBrand(value ? value : null);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div>Brand</div>
        <Select
          onChange={onHandleChangeBrand}
          value={selectedBrand}
          placeholder="Select Brand"
          className="w-44"
        >
          {carBrands.map((b) => (
            <option value={b} key={b}>
              {b}
            </option>
          ))}
        </Select>
      </div>
      <div className="flex w-full flex-wrap gap-6">
        {vehicles.map((v) => (
          <VehicleItem
            key={v.id}
            id={v.id}
            price={v.details.price}
            image={v.details.image}
            name={v.details.brand}
            year={v.details.manufactureYear}
            description={v.details.description}
            onAddToCart={onHandleAddToCart}
            isDisbaled={!!cartItems.find((i) => i.id === v.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageContainer;
