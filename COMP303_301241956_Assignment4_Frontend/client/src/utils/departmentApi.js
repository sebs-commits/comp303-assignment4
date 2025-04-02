import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

// Fetch all departments
export const getAllDepartments = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/departments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching departments:", error);
    throw error;
  }
};