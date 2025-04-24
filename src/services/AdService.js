import axios from "axios";
import { API_BASE_URL } from "../config/config";
import { API_KEY } from "../config/config";

const token = localStorage.getItem("token");

export const CreateAdService = (params) => {
  return axios
    .post(
      `${API_BASE_URL}/api/advertisements`,
      { ...params },
      {
        headers: {
          "x-api-key": API_KEY,
          Authorization: "Bearer" + token,
          // Accept: "application/json, text/plain. */*",
          "Content-Type": "application/json",

          // "Access-Control-Allow-origin": "*",
        },
      }
    )
    .then((res) => {
      console.log("Ad creation successfull");
    });
};

export const GetAdListService = (setAdList) => {
  return axios
    .get(`${API_BASE_URL}/api/advertisements`, {
      headers: {
        "x-api-key": API_KEY,
        Authorization: "Bearer" + token,
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

export const GetAdDetailsService = (params) => {
  return axios
    .get(
      `${API_BASE_URL}/api/advertisements/:id`,
      {},
      {
        headers: {
          "x-api-key": API_KEY,
          Authorization: "Bearer" + token,
          // Accept: "application/json, text/plain. */*",
          "Content-Type": "application/json",

          // "Access-Control-Allow-origin": "*",
        },
      }
    )
    .then((res) => {
      console.log("get ad details successfull");
      return res;
    });
};

export const GetUserProfileService = (params) => {
  return axios
    .get(
      `${API_BASE_URL}/api/profile`,
      {},
      {
        headers: {
          "x-api-key": API_KEY,
          Authorization: "Bearer" + token,
          // Accept: "application/json, text/plain. */*",
          "Content-Type": "application/json",

          // "Access-Control-Allow-origin": "*",
        },
      }
    )
    .then((res) => {
      console.log("get user profile successfull");
      return res;
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
          Authorization: "Bearer" + token,
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
          Authorization: "Bearer" + token,
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
