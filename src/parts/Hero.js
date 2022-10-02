import React from "react";

import locationIcon from "../assets/images/icons/loc-icon.svg";
import apartIcon from "../assets/images/icons/apart-icon.svg";
import travelIcon from "../assets/images/icons/travel-icon.svg";

import heroImg from "../assets/images/heroImg.png";

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
            <h1 className="line-height-1 mb-3" style={{color: "#140536", fontWeight: 400}}>
              <span className="text-primary font-weight-bold">Rent</span> and <span className="text-primary2 font-weight-bold">Find</span>, <br />
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
            <img
              src={heroImg}
              alt="Room with couches"
              className="img-fluid"
              style={{ maxWidth: 520}}
            />
          </div>
        </div>
      </section>
  );
}
