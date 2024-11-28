import axios from "axios";

export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/register`,
      {
        username,
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users.");
  }
};
