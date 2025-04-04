import { useState, useEffect } from "react";
import { getStaffById } from "../utils/staffApi";

export const useStaffDetail = (staffId) => {
  const [staffData, setStaffData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!staffId) {
      setIsLoading(false);
      setStaffData(null);
      setError("No Staff ID provided.");
      return;
    }

    const fetchDetails = async () => {
      setIsLoading(true);
      setError(null);
      setStaffData(null);
      try {
        console.log(`Fetching details for staff ID: ${staffId}`);
        const data = await getStaffById(staffId);
        console.log("Fetched details:", data);
        setStaffData(data);
      } catch (err) {
        console.error("Failed to fetch staff details:", err);
        setError(err.message || "Failed to load staff details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [staffId]);

  return { staffData, isLoading, error };
};
