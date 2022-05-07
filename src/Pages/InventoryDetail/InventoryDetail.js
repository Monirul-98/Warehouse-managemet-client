import React from "react";
import { useParams } from "react-router-dom";

const InventoryDetail = () => {
  const { id, name } = useParams();

  return (
    <div>
      <h2>Welcome to Inventory Detail: {id}</h2>
      {/* <h2>{name}</h2> */}
    </div>
  );
};

export default InventoryDetail;
