import { useState } from "react";
import { login } from "../utils/AuthApi";

export const useLogin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(formData.username, formData.password);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
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
