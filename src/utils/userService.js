import axios from "axios";

const token = localStorage.getItem("accessToken")

export const login = async (data) => {
  const loginData = await axios.post(
    "https://fundoonotes.incubation.bridgelabz.com/api/user/login",
    data
  );

  return loginData;
};

export const signup = async (data) => {
 const signupData = await axios
    .post(
      "https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
      data
    )
    ;
    return signupData;
};
