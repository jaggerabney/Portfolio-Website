import { useState, useCallback } from "react";

export default function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (config, callback) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(config.url, {
        method: config.method || "GET",
        headers: config.headers || {},
        body: config.body || null
      });

      if (!response.ok) {
        const message = await response.text();

        throw new Error(message);
      }

      const data = await response.json();

      callback(data);
    } catch (error) {
      setError(error || "Something went wrong!");
    }

    setIsLoading(false);
  });

  return {
    isLoading,
    error,
    sendRequest
  };
}
