import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white sticky-bottom">
      <div className="container p-4">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <p className="text-center">
            <small>
              &copy;All rights reserved by Monirul.{new Date().getFullYear()}
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
