import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { getAllCars } from "../redux/actions/carsActions";
import moment from "moment";
import { bookCar } from "../redux/actions/bookingActions";
import StripeCheckout from "react-stripe-checkout";
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
const { RangePicker } = DatePicker;
function BookingCar({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [car, setcar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setdriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (cars.length == 0) {
      dispatch(getAllCars());
    } else {
      setcar(cars.find((o) => o._id == match.params.carid));
    }
  }, [cars]);

  useEffect(() => {
    setTotalAmount(totalHours * car.rentPerHour + 30 * totalHours);
    if (driver) {
      setTotalAmount(totalAmount + 30 * totalHours);
    }
  }, [driver, totalHours]);

  function selectTimeSlots(values) {
    setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

    setTotalHours(values[1].diff(values[0], "hours"));
  }

  function onToken(token) {
    const reqObj = {
      token,
      user: JSON.parse(sessionStorage.getItem("user"))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };

    dispatch(bookCar(reqObj));
  }

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Col lg={10} sm={24} xs={24} className="p-3">
          <img
            src={car.image}
            className="carimg2"
            data-aos="flip-left"
            data-aos-duration="1500"
            alt="carimg"
          />
        </Col>

        <Col lg={10} sm={24} xs={24} className="text-center">
          <Divider type="horizontal" dashed>
            Car Info
          </Divider>
          <div style={{ textAlign: "left", paddingLeft: "40px" }}>
            <p>
              <strong>Car Name : </strong>
              {car.name}
            </p>
            <p>
              <strong>Rent Per KMs</strong> : ₹{car.rentPerHour} /-
            </p>
            <p>
              <strong>Fuel Type</strong> : {car.fuelType}
            </p>
            <p>
              <strong>Max Capacity</strong> : {car.capacity}
            </p>
          </div>

          <Divider type="horizontal" dashed>
            Select Time Slots
          </Divider>
          <RangePicker
            showTime={{ format: "HH" }}
            format="MMM DD yyyy"
            onChange={selectTimeSlots}
            style={{ width: "90%" }}
          />
          <br />
          <button
            className="btn1 mt-2"
            onClick={() => {
              setShowModal(true);
            }}
          >
            See Booked Slots
          </button>
          {from && to && (
            <div>
              <p>
                Total :{" "}
                <b>
                  {/* {totalHours / 24} Day{totalHours === 24 ? "" : "s"} */}
                  {totalHours < 24 ? totalHours : totalHours / 24}{" "}
                  {totalHours < 24 ? "Hours" : "Days"}
                </b>
              </p>
              <p>
                Rent Per KMs : <b>₹ {car.rentPerHour}</b>
              </p>
              {/* <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    setdriver(true);
                  } else {
                    setdriver(false);
                  }
                }}
              >
                Driver Required (+₹30 per hour)
              </Checkbox> */}

              <h3>
                Advance Amount : <strong>₹{totalAmount}</strong>{" "}
                <span className="span1">(Including Driver Charges)</span>
              </h3>

              <StripeCheckout
                shippingAddress
                token={onToken}
                currency="inr"
                amount={totalAmount * 100}
                stripeKey="pk_test_51NkWGeSIXwoKwTKuxRVnoMyUJKFfbzeZAoCBDn6zIxHxlNfErgQezjgdVgc4Cs5jU8VAlt6oM3snNby8R5nTvxsk00mIEguk1u"
              >
                <button className="btn1">Book Now</button>
              </StripeCheckout>
            </div>
          )}
        </Col>

        {car.name && (
          <Modal
            visible={showModal}
            closable={false}
            footer={false}
            title="Booked time slots"
          >
            <div className="p-2">
              {car.bookedTimeSlots.map((slot) => {
                return (
                  <button className="btn1 mt-2">
                    {slot.from} - {slot.to}
                  </button>
                );
              })}

              <div className="text-right mt-5">
                <button
                  className="btn1"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </Modal>
        )}
      </Row>
    </DefaultLayout>
  );
}

export default BookingCar;
