import React, { useRef } from "react";
//assets
import logo from "@logos/logo_yard_sale.svg";
//styles
import "../styles/Login.scss";
import "@styles/Assets.scss";
//components
import PrimaryButton from "../components/primary-button/PrimaryButton";

const Login = () => {
  const form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };
  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />

        <form action="/" className="form" ref={form}>
          <label for="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />

          <label for="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <PrimaryButton title={"Log in"} classesAdded={"login-button"}
          type="submit" onClick={handleSubmit}></PrimaryButton>
          <a href="/">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
