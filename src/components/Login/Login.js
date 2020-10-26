import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
  const signIn = () => {
    // magic
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
          alt=""
        />
        <img
          src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
