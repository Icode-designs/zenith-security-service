import { useEffect, useState } from "react";
import QUERY from "@/styles/Breakpoints.styles";

type QueryKey = keyof typeof QUERY;

const useMedia = (query: QueryKey): boolean => {
  const [matches, setMatches] = useState(false); // Always false initially (safe for SSR)

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent errors during SSR

    const mediaQuery = window.matchMedia(QUERY[query]);

    // Set initial match on mount
    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setMatches(event.matches);
    };

    handleChange(mediaQuery); // Run once immediately
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};

export default useMedia;
