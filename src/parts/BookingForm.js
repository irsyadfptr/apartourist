import React, { useEffect, useState } from "react";

import propTypes from "prop-types";

import Button from "elements/Button";
import { InputNumber, InputDate } from "elements/Form";

const BookingForm = (props) => {
  const { itemDetails } = props;
  const [data, setData] = useState(props.data);

  const updateData = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    //If prevProps.data is not equal to props.data, then update the state
    if (props.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      setData({
        ...data,
        duration: countDuration,
      });
    }

    if(props.data.duration !== data.duration){
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      setData({
        ...data,
        date: {
          ...data.date,
          endDate: endDate,
        },
      });
    }
  }, [data, props.data.date, props.data.duration]);

  const startBooking = () => {
    const payload = {
      _id: props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    };
    props.startBooking(payload);
  };

  return (
    <div className="card bordered" style={{ padding: "60px 80px" }}>
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 text-teal mb-4">
          ${itemDetails.price}{" "}
          <span className="text-gray-500 font-weight-light">
            per {itemDetails.unit}
          </span>
        </h5>

        <label htmlFor="duration">How long you will stay?</label>
        <InputNumber
          max={30}
          suffix={" night"}
          isSuffixPlural
          onChange={updateData}
          name="duration"
          value={data.duration}
        />

        <label htmlFor="date">Pick a date</label>
        <InputDate onChange={updateData} name="date" value={data.date} />

        <h6
          className="text-gray-500 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          You will pay{" "}
          <span className="text-gray-900">
            ${itemDetails.price * data.duration} USD
          </span>{" "}
          per{" "}
          <span className="text-gray-900">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>

        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={startBooking}
        >
          Continue to Book
        </Button>
      </div>
  );
};

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};