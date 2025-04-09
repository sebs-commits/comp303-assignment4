import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const register = async (staffData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, staffData);
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);

    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    }
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username,
      password,
    });

    if (response.data.message === "Login successful") {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("department", response.data.department);

      const encodedCredentials = btoa(`${username}:${password}`);
      localStorage.setItem("authCredentials", encodedCredentials);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Basic ${encodedCredentials}`;
    }

    return response.data;
    // Clear local storage,  we'll throw an error
  } catch (error) {
    console.error("Error during login:", error);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("department");
    localStorage.removeItem("authCredentials");

    delete axios.defaults.headers.common["Authorization"];

    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    }
    throw error;
  }
};

// Im just going to handle logging out in the frontend
export const logout = () => {
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("department");
  localStorage.removeItem("authCredentials");
  delete axios.defaults.headers.common["Authorization"];
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

export const getUserDepartment = () => {
  return localStorage.getItem("department");
};

export const isManagement = () => {
  return getUserDepartment() === "MANAGEMENT";
};
