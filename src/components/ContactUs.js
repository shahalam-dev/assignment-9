import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Card style={{ width: "100%", marginTop: "150px" }}>
            <Card.Body class="text-center p-5">
              <Card.Title>Address:</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>Keas 69 Str. 15234, Chalandri Athens,Greece</Card.Text>
              <Card.Text>+30-2106019311 (landline)</Card.Text>
              <Card.Text>+30-6977664062 (mobile phone)</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ContactUs;
