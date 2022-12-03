import { Button, Badge } from "@vechaiui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, selectCount } from "../../store/slices/counterSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectCount);

  const handleClickButton = () => {
    dispatch(increment());
  };

  return (
    <div className="flex flex-col gap-4">
      <Badge color="primary" variant="solid">
        {value}
      </Badge>
      <Button onClick={handleClickButton}>Increment +1</Button>
    </div>
  );
};

export default HomePage;
