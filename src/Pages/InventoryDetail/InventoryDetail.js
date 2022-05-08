import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://vast-headland-54732.herokuapp.com/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const [productQuantity, setProductQuantity] = useState(0);
  console.log(productQuantity);
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;

    const updatedProduct = { quantity };

    // send data to the server
    const url = `https://vast-headland-54732.herokuapp.com/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("users added succesfully!!!");
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h2>Welcome to Inventory Detail: {product._id}</h2>
      <h2>Name :{product.name}</h2>
      <h3>Quantity:{product.quantity}</h3>
      <form onSubmit={handleUpdateProduct}>
        <input type="number" name="number" placeholder="Quantity" required />
        <br />
        <input type="submit" value="Delivered" />
      </form>
    </div>
  );
};

export default InventoryDetail;
