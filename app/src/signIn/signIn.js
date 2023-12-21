import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext/AuthContext";
import { setupUser } from "../authContext/setup";
import "./signIn.css";

const initialState = {
  username: "",
  email: "",
  password: "",
  isMember: true,
};

export default function SignIn() {
  const { user, dispatch } = useContext(AuthContext);
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    if (user) {
      return navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (values.isMember) {
      // handle login
      const { email, password } = values;
      try {
        const res = await axios.post(
          "http://localhost:3001/api/v1/auth/login",
          { email, password }
        );
  
        console.log("Login response:", res); // Log the entire response for debugging
  
        if (res.data) {
          setupUser(res.data, dispatch);
          navigate("/");
        } else {
          console.error("Unexpected response format:", res);
        }
      } catch (error) {
        console.error("Error during login:", error);
        if (error.response && error.response.status === 401) {
          setUserMessage(error.response.data);
        }
      }
    } else {
      // register
      const { username, email, password } = values;
      try {
        const res = await axios.post(
          "http://localhost:3001/api/v1/auth/register",
          { email, username, password }
        );
  
        console.log("Register response:", res); // Log the entire response for debugging
  
        setUserMessage("User Created, click already a member and login");
        navigate("/login");
      } catch (err) {
        console.error("Error during registration:", err);
        setUserMessage(err.response.data);
      }
    }
  };

  return (
    <>
      <div className="signInPage">
        <h1 className="signInHead">{values.isMember ? "Login" : "Register"}</h1>
        <br />
        <div className="signInForm">
          <p className="text-danger">{userMessage}</p>
          <form onSubmit={onSubmit}>
            {!values.isMember && (
              <>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control emailInput"
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                  />
                </div>
                <br />
              </>
            )}
            <div className="form-group emailID">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control emailInput"
                id="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </div>
            <br />
            <div className="form-group password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control passwordInput"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary m-1 loginBtn">
              {values.isMember ? "Login" : "Register"}
            </button>
            <br />{" "}
            <div className="login">
              <button className="loginBtn" disabled={true}>Sign in with Google</button>
            </div>
            <br />
            <small className="m-3 text-center m-3" onClick={toggleMember}>
              {values.isMember
                ? "Not a member yet? register"
                : "Already a member, login"}
            </small>
          </form>
        </div>
      </div>
    </>
  );
}
