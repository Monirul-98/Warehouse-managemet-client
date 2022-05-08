import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const axios = require("axios");

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const email = user.email;
    const url = `https://vast-headland-54732.herokuapp.com/myproducts?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleProductDelete = (id) => {
    const proceed = window.confirm("are you sure you want to delete?");
    if (proceed) {
      const url = `https://vast-headland-54732.herokuapp.com/${id}`;
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
      <h2>My items</h2>
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
    </div>
  );
};

export default MyItem;
