import { useState } from "react";
import { login } from "../utils/AuthApi";

export const useLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await login(formData.username, formData.password);
      console.log("Login successful:", response);
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Login failed.");
    }
  };

  return {
    formData,
    error,
    success,
    handleChange,
    handleSubmit,
  };
};
