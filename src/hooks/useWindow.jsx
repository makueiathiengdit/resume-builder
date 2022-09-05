import { useState, useEffect } from "react";

function useWindow() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 600);
    console.log("is mobile: ", isSmallScreen);
  };
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isSmallScreen]);
  return isSmallScreen;
}

export default useWindow;
