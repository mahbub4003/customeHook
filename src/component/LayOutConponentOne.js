import React, { useEffect, useState } from "react";

function LayOutComponentOne() {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  const checkScreenSize = () => {
    setOnSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.addEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div>
      <h1 className={onSmallScreen ? "small" : "large"}>
        You are browsing on {onSmallScreen ? "small" : "large"} devise
      </h1>
    </div>
  );
}

export default LayOutComponentOne;
