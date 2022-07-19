import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Allinvoices from "./components/invoice/all";
import ViewInvoice from "./components/invoice/view";
import AppLayout from "./components/layout";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
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
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Allinvoices />} />
        <Route path="invoice/:id" element={<ViewInvoice />} />
      </Route>
      <Route path="*" element={<NotFoundPage/>} />

    </Routes>
  );
}

export default App;

// todos features
//* print out invoices
//* work on the scrolling issues
//* inlude editing as draft