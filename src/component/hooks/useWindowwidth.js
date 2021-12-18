import React, { useEffect, useState } from "react";

function useWindowwidth() {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setOnSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.addEventListener("resize", checkScreenSize);
  }, []);
  return onSmallScreen;
}

export default useWindowwidth;
