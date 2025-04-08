import { useState } from "react";
import { register } from "../utils/AuthApi";

export const useRegistration = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    staffName: "",
    department: {
      departmentId: "",
    },
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "departmentId") {
      setFormData({
        ...formData,
        department: {
          departmentId: parseInt(value, 10),
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      await register(formData);
      setSuccess(true);
      setFormData({
        username: "",
        password: "",
        staffName: "",
        department: {
          departmentId: "",
        },
      });
    } catch (err) {
      setError(err.message || "Registration failed.");
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
