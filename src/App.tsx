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
//  can filter invoice and on body click show reload all items
// Run throught the code again, naming pattern for fuction an structure of projects
// add animation on drawer, on invoice loading
// add testing cypress
//  rearrange into components
// review your code quality top to bottom
//try mowa method of formik, edit
// set up eslint
//  write documentation
// check typescript type usages
// work on the fix fot the blur part when the modal is open
// print out invoices
