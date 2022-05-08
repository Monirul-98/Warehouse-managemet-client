import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="myCarousel">
            <h3>Sheli hoque</h3>
            <p>
              They are the best provider in town.I would recommend them 100%.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
          <div className="myCarousel">
            <h3>Abdul Rahim</h3>
            <p>
              I have been ordering from them for a long time now.Great job job
              guys.Your service is the best.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
          <div className="myCarousel">
            <h3>Sagir ali</h3>
            <p>
              There service is incredible.They have been doing seriously good
              jobs.200% recommended.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
