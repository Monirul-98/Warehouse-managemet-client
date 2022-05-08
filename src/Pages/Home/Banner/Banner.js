import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <img
          className="banner-image"
          src="https://images.unsplash.com/photo-1531062916849-ac6624741870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
      <div className="banner-title ">
        <h1 className="banner-heading">Love Beverages</h1>
        <p>
          Place for all the beverages.Here we provide the best drinks
          available.This is the place where we guarantee quality.You can find
          all the trending beverages here.
        </p>
      </div>
    </div>
  );
};

export default Banner;
