import axios from "axios";
const API_BASE_URL = "http://localhost:8080/api";

// Fetch all hotels
export const getAllHotels = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/hotels`);
    return response.data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    throw error;
  }
};