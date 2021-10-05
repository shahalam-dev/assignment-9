import React, { useRef } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { registerAccount, signWithGoogle } from "../firebase";
import { useAuth } from "./App";

const SingUpForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  let history = useHistory();

  const { error, setError } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emaiCheck =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailChecked = emaiCheck.test(emailRef.current.value);

    const passwordCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passwordChecked = passwordCheck.test(passwordRef.current.value);

    if (emailChecked && passwordChecked && nameRef.current.value) {
      registerAccount(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      history.push("/");
      setError("");
    } else {
      setError("Your input is invalid...");
    }
  };

  const handleGoogleSignUp = () => {
    signWithGoogle();
    history.push("/");
  };
  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        <Card className="p-3 mt-5">
          <Card.Body>
            <h2>Sign up</h2>
            {error && (
              <Card.Header className="border border-danger text-center text-danger">
                {error}
              </Card.Header>
            )}
            <Form>
              <Form.Group id="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" ref={nameRef} required />
              </Form.Group>
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
                Sign up
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </div>
            <hr />
            <Button
              className="w-100 mt-3"
              type="submit"
              onClick={handleGoogleSignUp}
            >
              Sign up with google
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SingUpForm;
