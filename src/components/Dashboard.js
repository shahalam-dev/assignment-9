import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { logOut } from "../firebase";
import { useAuth } from "./App";

const Dashboard = () => {
  const { user, setUser } = useAuth();
  let history = useHistory();

  const handleLogOut = () => {
    logOut();
    setUser(false);
    history.push("/");
  };
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Card className="p-5 mt-5">
          <Card.Body className="text-center">
            <h2>Name : {user && user.displayName}</h2>
            <h3>Email : {user && user.email}</h3>
            <Button className="w-100 mt-3" type="submit" onClick={handleLogOut}>
              Log Out
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;
