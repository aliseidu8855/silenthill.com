import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToSection = (offset = 0) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth",
        });
      }
    }
  }, [location, offset]);
};

export default useScrollToSection;