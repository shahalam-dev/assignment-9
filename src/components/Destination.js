import React, { useRef, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router";
import icon from "../assets/peopleicon.png";
import { useAuth } from "./App";
import { vehicles } from "./Cards";
import Map from "./Map";

const Destination = () => {
  const [clickBnt, setClickBtn] = useState(false);
  const { error, setError } = useAuth();
  const [des, setDes] = useState();
  const pickFromRef = useRef({});
  const pickToRef = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    if (pickFromRef.current.value && pickToRef.current.value) {
      setDes({
        from: pickFromRef.current.value,
        to: pickToRef.current.value,
      });
      setClickBtn(true);
    } else {
      setError("Fill the both input");
    }
  };

  const { id } = useParams();

  const vehicleType = vehicles.find((vehicle) => vehicle.id === id);

  return (
    <Row>
      <Col md={4}>
        {!clickBnt && (
          <Card className="p-3 mt-5">
            {error && (
              <Card.Header className="border border-danger text-center text-danger">
                Fill the Input
              </Card.Header>
            )}
            <Card.Body>
              <Form>
                <Form.Group id="name">
                  <Form.Label>Pick From</Form.Label>
                  <Form.Control type="name" ref={pickFromRef} required />
                </Form.Group>
                <Form.Group id="pick-from">
                  <Form.Label>Pick To</Form.Label>
                  <Form.Control type="pick-to" ref={pickToRef} required />
                </Form.Group>
                <Button
                  className="w-100 mt-3"
                  type="submit"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </Form>
            </Card.Body>
          </Card>
        )}
        {clickBnt && (
          <Card className="mt-5">
            <Card.Header
              className="bg-info bg-gradient text-capitalize"
              style={{ color: "#ffffff" }}
            >
              <h3>From : {des.from}</h3>
              <h3>To: {des.to}</h3>
            </Card.Header>
            <Card.Body>
              <Card className="mt-3">
                <Card.Header>
                  <img
                    src={vehicleType.image}
                    alt={vehicleType.name}
                    style={{ maxWidth: "20%" }}
                  />

                  <span
                    style={{
                      marginLeft: "10%",
                      marginRight: "10px",
                      maxWidth: "15%",
                    }}
                  >
                    {vehicleType.name}
                  </span>
                  <img
                    src={icon}
                    alt=""
                    style={{
                      maxWidth: "10%",
                      marginRight: "2%",
                    }}
                  />

                  <span
                    style={{
                      fontSize: "20px",
                      maxWidth: "3%",
                    }}
                  >
                    2
                  </span>
                  <span
                    style={{
                      fontSize: "30px",
                      marginLeft: "20%",
                      marginTop: "10px",
                    }}
                  >
                    $25
                  </span>
                </Card.Header>
              </Card>
              <Card className="mt-3">
                <Card.Header>
                  <img
                    src={vehicleType.image}
                    alt={vehicleType.name}
                    style={{ maxWidth: "20%" }}
                  />

                  <span
                    style={{
                      marginLeft: "10%",
                      marginRight: "10px",
                      maxWidth: "15%",
                    }}
                  >
                    {vehicleType.name}
                  </span>
                  <img
                    src={icon}
                    alt=""
                    style={{
                      maxWidth: "10%",
                      marginRight: "2%",
                    }}
                  />

                  <span
                    style={{
                      fontSize: "20px",
                      maxWidth: "3%",
                    }}
                  >
                    4
                  </span>
                  <span
                    style={{
                      fontSize: "30px",
                      marginLeft: "20%",
                      marginTop: "10px",
                    }}
                  >
                    $64
                  </span>
                </Card.Header>
              </Card>
              <Card className="mt-3">
                <Card.Header>
                  <img
                    src={vehicleType.image}
                    alt={vehicleType.name}
                    style={{ maxWidth: "20%" }}
                  />

                  <span
                    style={{
                      marginLeft: "10%",
                      marginRight: "10px",
                      maxWidth: "15%",
                    }}
                  >
                    {vehicleType.name}
                  </span>
                  <img
                    src={icon}
                    alt=""
                    style={{
                      maxWidth: "10%",
                      marginRight: "2%",
                    }}
                  />

                  <span
                    style={{
                      fontSize: "20px",
                      maxWidth: "3%",
                    }}
                  >
                    6
                  </span>
                  <span
                    style={{
                      fontSize: "30px",
                      marginLeft: "20%",
                      marginTop: "10px",
                    }}
                  >
                    $85
                  </span>
                </Card.Header>
              </Card>
            </Card.Body>
          </Card>
        )}
      </Col>
      <Col md={8}>
        <Map />
      </Col>
    </Row>
  );
};

export default Destination;
