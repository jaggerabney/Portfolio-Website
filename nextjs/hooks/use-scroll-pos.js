import { useState, useEffect } from "react";

export default function useScrollPos() {
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;

    setScrollPos(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPos]);

  return scrollPos;
}
