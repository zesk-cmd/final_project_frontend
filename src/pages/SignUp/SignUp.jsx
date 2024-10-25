import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connection_data } from "../../usefull_data";

import "./SignUp.css";

const SignUp = () => {
  const [response_status, setResponseStatus] = useState({
    message: "",
    status: "success",
    visible: false,
  });
  const [signup_data, setSignUpData] = useState({
    force_number: "",
    first_name: "",
    last_name: "",
    unit: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });

  const signUpHandler = async (event) => {
    event.preventDefault();

    setResponseStatus({
      message: "",
      status: "fail",
      visible: false,
    });

  
    // Check if passwords match
    if (signup_data.password === signup_data.confirm_password) {

      delete signup_data.confirm_password

      try {
        const response = await fetch(
          connection_data.backend_url + "adminstration/sign-up/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(signup_data),
          }
        );

        // Check if the response status is ok (200-299)
        if (!response.ok) {
          const errorData = await response.json();
          // Handle different error statuses from the backend
          setResponseStatus({
            message: errorData.message || "Sign-up failed. Please try again.",
            status: "fail",
            visible: true,
          });
          console.error("Error response:", errorData);
        } else {
          const data = await response.json();
          // Handle successful sign-up, perhaps redirect the user or show a success message
          setResponseStatus({
            message: "Sign-up successful! Welcome!",
            status: "success",
            visible: true,
          });
          console.log("Sign-up successful:", data);
        }
      } catch (error) {
        // Handle network errors or unexpected issues
        setResponseStatus({
          message: "Network error. Please check your connection.",
          status: "fail",
          visible: true,
        });
        console.error("Network error:", error.message);
      }
    } else {
      setResponseStatus({
        message: "Password mismatch",
        status: "fail",
        visible: true,
      });
    }
  };

  return (
    <div className="signup-container">
      <header className="heading">
        <span className="header">Sign Up</span>
        <small className="mini-header">School of Air Defence</small>
      </header>

      <input
        className="input"
        type="text"
        placeholder="Force number"
        value={signup_data.force_number}
        onChange={(e) =>
          setSignUpData((data) => ({ ...data, force_number: e.target.value }))
        }
      />

      <input
        className="input"
        type="text"
        placeholder="First name"
        value={signup_data.first_name}
        onChange={(e) =>
          setSignUpData((data) => ({ ...data, first_name: e.target.value }))
        }
      />
      <input
        className="input"
        type="text"
        placeholder="Last name"
        value={signup_data.last_name}
        onChange={(e) =>
          setSignUpData((data) => ({ ...data, last_name: e.target.value }))
        }
      />
      <input
        className="input"
        type="text"
        placeholder="Phone number"
        value={signup_data.phone_number}
        onChange={(e) =>
          setSignUpData((data) => ({ ...data, phone_number: e.target.value }))
        }
      />
      <input
        className="input"
        type="text"
        placeholder="Unit"
        value={signup_data.unit}
        onChange={(e) =>
          setSignUpData((data) => ({ ...data, unit: e.target.value }))
        }
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={signup_data.password}
        onChange={(e) =>
          setSignUpData((data) => ({ ...data, password: e.target.value }))
        }
      />
      <input
        className="input"
        type="password"
        placeholder="Confirm password"
        value={signup_data.confirm_password}
        onChange={(e) =>
          setSignUpData((data) => ({
            ...data,
            confirm_password: e.target.value,
          }))
        }
      />

      <small
        className={`response ${response_status.status} ${
          response_status.visible && "show"
        }`}
      >
        {response_status.message}
      </small>

      <button className="button" onClick={signUpHandler}>
        Sign Up
      </button>

      <div className="instruction-container">
        <span className="instruction">
          Already have an account?{" "}
          <Link className="link" to={"/sign-in"}>
            SignIn
          </Link>
        </span>
        <span className="instruction">
          You have new guest?{" "}
          <Link className="link" to={"/registration"}>
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
