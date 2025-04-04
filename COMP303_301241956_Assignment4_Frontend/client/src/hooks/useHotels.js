import { useState, useEffect } from "react";
import { getAllHotels } from "../utils/HotelApi";

export const useHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getAllHotels();
        setHotels(data);
      } catch (err) {
        console.error("Error fetching hotels in hook:", err);
        setError(err.message || "Failed to fetch hotels");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotels();
  }, []);

  return { hotels, isLoading, error };
};
