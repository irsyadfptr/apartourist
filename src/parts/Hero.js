import React from "react";

import locationIcon from "../assets/images/icons/loc-icon.svg";
import apartIcon from "../assets/images/icons/apart-icon.svg";
import travelIcon from "../assets/images/icons/travel-icon.svg";

import heroImg from "../assets/images/hero-img.png";
import heroBorderImg from "../assets/images/heroBorder-img.png";

import Button from "elements/Button";

export default function Hero(props) {
  // const showMostPicked = () => {
  //   window.scrollTo({
  //     top: props.refMostPicked.current.offsetTop - 30,
  //     behavior: "smooth",
  //   });
  // }

  return (
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Rent and Find, <br />
              Hidden Gems Around You!
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              // onClick={showMostPicked}
            >
              Lets Go!
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src={travelIcon}
                  alt={`Travelers`}
                />
                <h6 className="mt-3">
                {9999}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src={apartIcon}
                  alt={`Apartments`}
                />
                <h6 className="mt-3">
                  {9999}{" "}
                  <span className="text-gray-500 font-weight-light">
                    units
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={locationIcon}
                  alt={`Locations`}
                />
                <h6 className="mt-3">
                  {9999}{" "}
                  <span className="text-gray-500 font-weight-light">
                    locations
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={heroImg}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 , maxWidth: 520, maxHeight: 340}}
              />
              <img
                src={heroBorderImg}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" , maxWidth: 520}}
              />
            </div>
          </div>
        </div>
      </section>
  );
}
