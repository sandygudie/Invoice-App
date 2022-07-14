import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Allinvoices from "./components/invoice/all";
import ViewInvoice from "./components/invoice/view";
import AppLayout from "./components/layout";

function App() {
  useEffect(() => {
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
    </Routes>
  );
}

export default App;

// todos features
//* reload all invoices and body click
//* add animation on drawer, on invoice loading
//* set up eslint
//* write documentation
//* work on fixing the blur part when the modal is open
//* print out invoices
