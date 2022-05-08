import React from "react";

const NewsLetter = () => {
  return (
    <div className="my-3">
      <h5 className="h4-text text-center">GET IN TOUCH</h5>
      {/* <h1 className='fs-1'>How can we</h1> */}
      <h6 className="fs-1 h2-text fw-bolder text-center">SUBSCRIBE</h6>
      <p className="h5-text text-center fw-bold">
        Subscribe!! And get all the latest stock information!
      </p>

      <input
        type="email"
        className="form-control w-50 mx-auto"
        id="exampleFormControlInput1"
        placeholder="Enter Your Email to Subscribe"
      />
      <div className="text-center">
        <button
          className="btn btn-dark align-middle mt-3 justify-content-center"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
