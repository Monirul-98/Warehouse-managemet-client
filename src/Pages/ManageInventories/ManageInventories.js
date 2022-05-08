import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ManageInventories.css";

const ManageInventories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductDelete = (id) => {
    const proceed = window.confirm("are you sure you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2>All Products</h2>
      {products.map((product) => (
        <div className="d-flex align-items-center" key={product._id}>
          <div>
            <img src={product.img} alt="" className="product-image" />
            <h2>{product.name}</h2>
          </div>

          <div>
            <h5>Price:{product.price}</h5>
            <h5>Quantity:{product.quantity}</h5>
          </div>
          <div>
            <button
              onClick={() => handleProductDelete(product._id)}
              className="btn btn-dark ms-4"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <Link to="/addItem">
        <button className="btn btn-dark">Add Item</button>
      </Link>
    </div>
  );
};

export default ManageInventories;
