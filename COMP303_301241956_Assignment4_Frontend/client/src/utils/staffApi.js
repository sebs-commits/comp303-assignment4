// getAllStaff
// getStaffById
// addStaff
// updateStaff

import axios from "axios";
const API_BASE_URL = "http://localhost:8080/api";
// Fetch all staff members
export const getAllStaff = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/staff`);
    return response.data;
  } catch (error) {
    console.error("Error fetching staff:", error);
    throw error;
  }
};
// Fetch staff member by ID
export const getStaffById = async (staffId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/staff/${staffId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching staff member:", error);
    throw error;
  }
};
// Add new staff member
export const addStaff = async (staffData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/create-staff`,
      staffData
    );
    return response.data;
  } catch (error) {
    console.error("Error adding staff member:", error);
    throw error;
  }
};

// Update staff member
export const updateStaff = async (staffId, staffData) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/update-staff/${staffId}`,
      staffData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating staff member:", error);
    throw error;
  }
};
