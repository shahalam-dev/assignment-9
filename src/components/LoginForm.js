import React, { useRef } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { LoginToAccount, signWithGoogle } from "../firebase";
import { useAuth } from "./App";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  let history = useHistory();
  const { error, setError } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    LoginToAccount(emailRef.current.value, passwordRef.current.value, setError);
  };

  const handleSignWithGoogle = () => {
    signWithGoogle();
    history.push("/");
  };
  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        <Card className="p-3 mt-5">
          <Card.Body>
            <h2>Login</h2>
            {error && (
              <Card.Header className="border border-danger text-center text-danger">
                {error}
              </Card.Header>
            )}
            <Form>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button
                className="w-100 mt-3"
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/signup">Create an account</Link>
            </div>
            <hr />
            <Button
              className="w-100 mt-3"
              type="submit"
              onClick={handleSignWithGoogle}
            >
              Login with Google
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default LoginForm;
