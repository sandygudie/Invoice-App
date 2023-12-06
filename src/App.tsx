import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import AppLayout from "./components/layout";
import NotFoundPage from "./components/NotFoundPage";
import Allinvoices from "./components/invoice/all";
import ViewInvoice from "./components/invoice/view";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <React.Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-screen bg-skin-fill">
          <LoadingSpinner />
        </div>
      }
    >
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Allinvoices />} />
          <Route path="invoice/:id" element={<ViewInvoice />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
