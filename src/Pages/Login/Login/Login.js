import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogIn from "../SocialLogin/SocialLogIn";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  if (user) {
    navigate(from, { replace: true });
  }
  const handleLogIn = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      alert("Sent email");
    } else {
      alert("Please enter you email!");
    }
  };
  return (
    <div className="my-5 w-50 mx-auto">
      <h2 className="text-center">Please Login!</h2>
      <Form className="w-100 " onSubmit={handleLogIn}>
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
          Log In
        </Button>
        <p className="mt-4">
          New in Money Mender?{" "}
          <Link className="text-info text-decoration-none" to="/register">
            Register here.
          </Link>
        </p>
        <p className="mt-4">
          Forget Password?{" "}
          <button
            className="btn btn-link text-danger text-decoration-none"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </p>
      </Form>
      <SocialLogIn></SocialLogIn>
    </div>
  );
};

export default Login;
