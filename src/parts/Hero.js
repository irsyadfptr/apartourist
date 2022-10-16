import React from "react";

import locationIcon from "../assets/images/icons/location-icon.svg";
import apartIcon from "../assets/images/icons/apartment-icon.svg";
import travelIcon from "../assets/images/icons/bag-icon.svg";
import ImageHero from "../assets/images/img-hero.jpg";
import ImageHero_ from "../assets/images/img-hero-frame.jpg";

import Button from "elements/Button";
import { Fade } from "react-reveal";

const Hero = (props) => {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto" style={{ maxWidth: 530 }}>
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
              onClick={showMostPicked}
            >
              Lets Go!
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="40"
                  height="40"
                  src={travelIcon}
                  alt={`Travelers`}
                />
                <h6 className="mt-3">
                {props?.data?.travelers}{" "}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="40"
                  height="40"
                  src={apartIcon}
                  alt={`Apartments`}
                />
                <h6 className="mt-3">
                  {props?.data?.units}{" "}
                  <span className="text-gray-500 font-weight-light">
                    units
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="40"
                  height="40"
                  src={locationIcon}
                  alt={`Locations`}
                />
                <h6 className="mt-3">
                  {props?.data?.locations}{" "}
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
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Hero