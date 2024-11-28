import axios from "axios";

export const apiLoginDashboard = async (email, password) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login dashboard.");
  }
};
