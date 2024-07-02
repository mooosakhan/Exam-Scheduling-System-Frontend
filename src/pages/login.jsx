import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] =
    useState(false);
  const [passwordError, setPasswordError] =
    useState(false);

  const Submit = () => {
    console.log(email, password);
    let valid = true;

    if (!email) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-heading">
          <h1 className="login-h1">
            SCHEDULING SYSTEM
          </h1>
        </div>
        <div className="login-form">
          <TextField
            error={emailError}
            id="filled-basic"
            label="Email"
            variant="filled"
            className="login-input"
            helperText={
              emailError
                ? "Email is required."
                : ""
            }
            InputLabelProps={{
              sx: {
                color: "white",
                "&.Mui-focused": {
                  color: "white",
                },
              },
            }}
            InputProps={{
              sx: {
                color: "white",
              },
            }}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
          <TextField
            id="filled-password-input"
            label="Password"
            error={passwordError}
            variant="filled"
            className="login-input"
            type="password"
            autoComplete="current-password"
            helperText={
              passwordError
                ? "Password is required."
                : ""
            }
            InputLabelProps={{
              sx: {
                color: "white",
                "&.Mui-focused": {
                  color: "white",
                },
              },
            }}
            InputProps={{
              sx: {
                color: "white",
              },
            }}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div
          className="login-btn-div"
          onClick={() => Submit()}>
          <button className="login-btn">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
