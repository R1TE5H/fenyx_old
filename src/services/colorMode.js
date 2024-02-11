import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleColorSchemeChange = (event) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addListener(handleColorSchemeChange);

    // Initial check for the color scheme
    setIsDarkMode(darkModeMediaQuery.matches);

    // Clean up the listener when the component unmounts
    return () => {
      darkModeMediaQuery.removeListener(handleColorSchemeChange);
    };
  }, []);

  return isDarkMode;
};

export default useDarkMode;
