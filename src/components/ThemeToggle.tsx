import { useState } from "react";
import { HiSun,HiMoon } from "react-icons/hi";
function Themetoggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  return (
    <div className="px-4 lg:py-4">
      <button
        aria-label="Toggle Dark Mode"
        className="py-0"
        onClick={() => {
          if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setTheme("light");
          } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setTheme("dark");
          }
        }}
      >
        {theme === "light" ? (
          <HiMoon className="inline text-2xl text-primary" />
        ) : (
          <HiSun className="inline text-2xl text-primary" />
        )}
      </button>
    </div>
  );
}

export default Themetoggle;
