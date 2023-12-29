import axios from "axios";

const token = localStorage.getItem("accessToken");

export const login = async (data) => {
  const loginData = await axios.post(
    "http://localhost:3080/api/v1/users/login",
    data
  );

  return loginData;
};

export const signup = async (data) => {
  const signupData = await axios.post(
    "http://localhost:3080/api/v1/users/",
    data
  );
  return signupData;
};


export const getDetails = async (headers) => {
  try {
    const response = await axios.get(
      "http://localhost:3080/api/v1/users/", 
      {
        headers: {
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${headers}`,
        },
      }
    );

    const responseData = response.data;

    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};

