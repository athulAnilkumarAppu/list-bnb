import axios from "axios";
import { API_BASE_URL } from "../config/config";
import { API_KEY } from "../config/config";

const tokenLc = localStorage.getItem("token");
const token = `Bearer ${tokenLc}`;

export const CreateAdService = (params) => {
  return axios
    .post(
      `${API_BASE_URL}/api/advertisements`,
      { ...params },
      {
        headers: {
          "x-api-key": API_KEY,
          Authorization: token,
          // Accept: "application/json, text/plain. */*",
          "Content-Type": "application/json",

          // "Access-Control-Allow-origin": "*",
        },
      }
    )
    .then((res) => {
      alert("Ad creation successfull");
      console.log("Ad creation successfull");
    });
};

export const GetAdListService = (setAdList) => {
  return axios
    .get(`${API_BASE_URL}/api/advertisements`, {
      headers: {
        "x-api-key": API_KEY,
        Authorization: token,
        // Accept: "application/json, text/plain. */*",
        "Content-Type": "application/json",

        // "Access-Control-Allow-origin": "*",
      },
    })
    .then((res) => {
      console.log("get ad list successfull");
      setAdList(res.data);
    });
};

export const GetAdDetailsService = (id, setAdDetails) => {
  return axios
    .get(`${API_BASE_URL}/api/advertisements/${id}`, {
      headers: {
        "x-api-key": API_KEY,
        Authorization: token,
        // Accept: "application/json, text/plain. */*",
        "Content-Type": "application/json",

        // "Access-Control-Allow-origin": "*",
      },
    })
    .then((res) => {
      setAdDetails(res.data);
      console.log("get ad details successfull");
    });
};

export const GetUserProfileService = (setProfileDetails) => {
  return axios
    .get(`${API_BASE_URL}/api/profile`, {
      headers: {
        "x-api-key": API_KEY,
        Authorization: token,
        // Accept: "application/json, text/plain. */*",
        "Content-Type": "application/json",

        // "Access-Control-Allow-origin": "*",
      },
    })
    .then((res) => {
      console.log("get user profile successfull");
      setProfileDetails(res.data);
    });
};

export const UpdateUserProfileService = (params) => {
  return axios
    .put(
      `${API_BASE_URL}/api/profile`,
      {},
      {
        headers: {
          "x-api-key": API_KEY,
          Authorization: token,
          // Accept: "application/json, text/plain. */*",
          "Content-Type": "application/json",

          // "Access-Control-Allow-origin": "*",
        },
      }
    )
    .then((res) => {
      console.log("Update user profile successfull");
    });
};

export const DeleteAdService = (params) => {
  return axios
    .delete(
      `${API_BASE_URL}/api/advertisements/:id`,
      {},
      {
        headers: {
          "x-api-key": API_KEY,
          Authorization: token,
          // Accept: "application/json, text/plain. */*",
          "Content-Type": "application/json",

          // "Access-Control-Allow-origin": "*",
        },
      }
    )
    .then((res) => {
      console.log("Delete user profile successfull");
    });
};
