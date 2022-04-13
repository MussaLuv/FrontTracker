// user.js
export const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";
export const COHORT = "2202-FTB-ET-WEB-FT";
const URL = BASE_URL + "/api";

export const registerUser = async (username, password) => {
  const response = await fetch(`${URL}/users/register`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = await response.json();

  return data;
};

export const loginUser = async (username, password) => {
  const response = await fetch(`${URL}/users/login`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const data = await response.json();

  return data;
};

export const fetchUser = async (token) => {
  console.log("token in fetchUser:", token);
  const response = await fetch(`${URL}/users/me`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  // .then((response) => response.json())
  // .then((result) => {
  //   console.log(result);
  // })
  // .catch(console.error);
  console.log("response:", response);
  const data = await response.json();
  return data;
};
