import React from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import AppLayout from "./components/layout";
import NotFoundPage from "./pages/NotFoundPage";
import Allinvoices from "./pages/invoice/all";
import ViewInvoice from "./pages/invoice/view";
import Home from "./pages/Home";

function App() {
  return (
    <React.Suspense
      fallback={
        <div className="flex flex-col bg-secondary items-center justify-center h-screen bg-skin-fill">
          <LoadingSpinner />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AppLayout />}>
          <Route path="/invoices" element={<Allinvoices />} />
          <Route path="/invoice/:id" element={<ViewInvoice />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
