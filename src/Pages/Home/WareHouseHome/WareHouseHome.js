import React from "react";
import Banner from "../Banner/Banner";
import Inventories from "../Inventories/Inventories";
import Testimonial from "../Testimonial/Testimonial";
import "./WareHouseHome.css";

const WareHouseHome = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <div className="carousal-container ">
        <h1 className="mt-5 mb-5 text-center text-white">Reviews</h1>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default WareHouseHome;
