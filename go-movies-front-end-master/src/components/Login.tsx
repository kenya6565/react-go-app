import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Input from "./form/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // get value from Outlet
  const { setJwtToken }: { setJwtToken: (jwtToken: string) => void } =
    useOutletContext();

  const {
    setAlertClassName,
  }: { setAlertClassName: (alertClassName: string) => void } =
    useOutletContext();

  const {
    setAlertMessage,
  }: {
    setAlertMessage: (alertMessage: string) => void;
  } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // prevent browser to reload as a default movement
    event.preventDefault();
    console.log("email/password", email, password);
    if (email === "admin@example.com") {
      setJwtToken("abc");
      setAlertClassName("d-none");
      setAlertMessage("");

      // when successfully logging in, redirecting root
      navigate("/");
    } else {
      setAlertClassName("alert-danger");
      setAlertMessage("Invalid credentials");
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <Input
          title="Email Address"
          type="email"
          className="form-control"
          name="email"
          autoComplete="email-new"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        ></Input>

        <Input
          title="Password"
          type="password"
          className="form-control"
          name="password"
          autoComplete="password-new"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        ></Input>
        <hr />
        <input type="submit" className="btn btn-primary" value="login" />
      </form>
    </div>
  );
};

export default Login;
