import axios from "axios";
import { API_BASE_URL } from "../config/config";
import { API_KEY } from "../config/config";

export const LoginService = (username, password, setAuthenticated) => {
  return axios
    .post(
      `${API_BASE_URL}/api/auth/local`,
      { identifier: username, password: password },
      {
        headers: {
          "x-api-key": API_KEY,
          // Accept: "application/json, text/plain. */*",
          "Content-Type": "application/json",
          // "Access-Control-Allow-origin": "*",
        },
      }
    )
    .then((res) => {
      if (res) {
        localStorage.setItem("token", res.data.jwt);
        console.log("Login successfull");
        setAuthenticated(true);
      } else {
        alert("Invalid username or password, Please try again.. ");
      }
    })
    .catch((err) => {
      alert("Invalid username or password, Please try again.. ");
    });
};

export const SignupService = (email, username, password, setAuthenticated) => {
  return axios
    .post(
      `${API_BASE_URL}/api/auth/local/register`,
      { email: email, username: username, password: password },
      {
        headers: {
          "x-api-key": API_KEY,
          // Accept: "application/json, text/plain. */*",
          "Content-Type": "application/json",
          // "Access-Control-Allow-origin": "*",
        },
      }
    )
    .then((res) => {
      if (res) {
        localStorage.setItem("token", res.data.jwt);
        setAuthenticated(true);
        console.log("Signup successfull");
      } else {
        alert("User registration failed, Please try again.. ");
      }
    })
    .catch((err) => {
      alert("User registration failed, Please try again.. ");
    });
};
