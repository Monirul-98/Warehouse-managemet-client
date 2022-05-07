import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogIn from "../SocialLogin/SocialLogIn";

const Registration = () => {
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleRegister = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="my-5 w-50 mx-auto">
      {user ? (
        <div className="text-center fs-2 text-info">
          Registration Successful!
        </div>
      ) : (
        <p className="text-center fs-2 text-danger">{error}</p>
      )}
      <h2 className="text-center">Please Register!</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
        </Form.Group>
        <Button variant="dark" type="submit" className="d-block mx-auto">
          Register
        </Button>
        <p className="mt-4">
          Already have an account?{" "}
          <Link className="text-info text-decoration-none" to="/login">
            Log in here
          </Link>
        </p>
      </Form>
      <SocialLogIn></SocialLogIn>
    </div>
  );
};

export default Registration;
