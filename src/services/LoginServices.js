import axios from "axios";
import { API_BASE_URL } from "../config/config";
import { API_KEY } from "../config/config";

export const LoginService = (username, password) => {
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
      } else {
        alert("Invalid username or password, Please try again.. ");
      }
      l;
    });
};

export const SignupService = (email, username, password) => {
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
        console.log("Signup successfull");
      } else {
        alert("Register failed, Please try again.. ");
      }
    });
};
