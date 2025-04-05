import { useState } from "react";
import { addStaff } from "../utils/staffApi";
import { useDepartments } from "./useDepartments";
import { useHotels } from "./useHotels";

export const useStaffCreate = () => {
  const [formData, setFormData] = useState({
    staffName: "",
    department: null,
    hotel: null,
    staffRating: 0,
  });

  const { departments } = useDepartments();
  const { hotels } = useHotels();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    try {
      setIsSubmitting(true);
      setError(null);
      await addStaff(formData);
      setSuccess(true);
      setFormData({
        staffName: "",
        department: null,
        hotel: null,
        staffRating: 0,
      });
    } catch (err) {
      let errorMessage = "Failed to create staff";
      // Check if the response contains data that is a string, then return it
      if (err.response) {
        if (typeof err.response.data === "string") {
          errorMessage = err.response.data;
        }
      }

      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    departments,
    hotels,
    isSubmitting,
    error,
    success,
    handleChange,
    handleSubmit,
    setSuccess,
  };
};
