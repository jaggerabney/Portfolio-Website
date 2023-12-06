import { useState, useEffect } from "react";

export default function useCSSProperty(prop) {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const result = Number(
      getComputedStyle(document.documentElement)
        .getPropertyValue(prop)
        .replace(/\D/g, "")
    );

    setProperty(result);
  }, []);

  return property;
}
