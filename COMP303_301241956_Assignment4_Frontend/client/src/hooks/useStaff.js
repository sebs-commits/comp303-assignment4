// src/hooks/useStaff.js
import { useState, useEffect } from "react";
import { getAllStaff } from "../utils/staffApi";

export const useStaff = () => {
  const [staffList, setStaffList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStaff = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getAllStaff();
        setStaffList(data);
      } catch (err) {
        console.error("Error fetching staff in hook:", err);
        setError(err.message || "Failed to fetch staff");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStaff();
  }, []);

  return { staffList, isLoading, error };
};
