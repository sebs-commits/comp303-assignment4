import { useState, useEffect } from "react";
import { updateStaff, getStaffById } from "../utils/staffApi";
import { useDepartments } from "./useDepartments";
import { useHotels } from "./useHotels";

export const useStaffEdit = (staffId) => {
  const [formData, setFormData] = useState({
    department: null,
    hotel: null,
    staffRating: 0,
  });

  const { departments } = useDepartments();
  const { hotels } = useHotels();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!staffId) return;

    const fetchStaffData = async () => {
      try {
        setIsLoading(true);
        const staffData = await getStaffById(staffId);
        setFormData({
          department: staffData.department,
          hotel: staffData.hotel,
          staffRating: staffData.staffRating || 0,
        });
      } catch (err) {
        console.error("Error loading staff data:", err);
        setError("Failed to load staff data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaffData();
  }, [staffId]);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    try {
      setIsSubmitting(true);
      setError(null);
      await updateStaff(staffId, formData);
      setSuccess(true);
    } catch (err) {
      let errorMessage = "Failed to update staff";

      if (err.response) {
        // Check if the response contains data that is a string, then return it
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
    isLoading,
    isSubmitting,
    error,
    success,
    handleChange,
    handleSubmit,
  };
};
