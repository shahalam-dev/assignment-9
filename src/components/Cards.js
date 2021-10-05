import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import bike from "../assets/bike.png";
import bus from "../assets/bus.png";
import car from "../assets/car.png";
import train from "../assets/train.png";

export const vehicles = [
  {
    id: "car",
    name: "CAR",
    image: car,
  },
  {
    id: "bus",
    name: "BUS",
    image: bus,
  },
  {
    id: "train",
    name: "TRAIN",
    image: train,
  },
  {
    id: "bike",
    name: "BIKE",
    image: bike,
  },
];

const Cards = () => {
  return (
    <>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <h2 className="text-center pt-5">Grab your Ride</h2>
        </Col>
      </Row>
      <Row
        xs={1}
        md={4}
        className="g-4"
        style={{ height: "80vh", paddingTop: "15vh" }}
      >
        {vehicles.map((vehicle) => (
          <Col key={vehicle.id}>
            <Link to={"destination/" + vehicle.id}>
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  src={vehicle.image}
                  style={{ maxWidth: "80%", margin: "10%", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{vehicle.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cards;
