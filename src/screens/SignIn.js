import React from "react";
import { useHistory } from "react-router-dom";
import { login } from "../utils";

function SignIn() {

  const history = useHistory();

  const handleLogin = () => {
    login();
    history.push("/dashboard");
  }


  return (
    <div>
      <h1>Sign in</h1>
      <button onClick={handleLogin}>Click to login</button>
    </div>
  );
}

export default SignIn;
