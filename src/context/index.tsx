import { createContext, ReactNode, useEffect, useState } from "react";
import { data } from "../data";
import { Invoice, AppContextState, InitialValues } from "../types";

export const AppContext = createContext<AppContextState | null>(null);

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [invoices, setInvoices] = useState<Invoice[]>(data);

  useEffect(() => {
    if (localStorage.getItem("invoices") === null) {
      localStorage.setItem("invoices", JSON.stringify(data));
    }
    setInvoices(JSON.parse(localStorage.getItem("invoices") || ""));
  }, [setInvoices]);

  const createPaidInvoice = (invoiceItem: Invoice) => {
    const newInvoice: Invoice = {
      ...invoiceItem,
    };
    setInvoices((prevState: Invoice[]) => [newInvoice, ...prevState]);
    localStorage.setItem("invoices", JSON.stringify([newInvoice, ...invoices]));
  };

  const createDraftInvoice = (invoiceItem: Invoice) => {
    const newInvoice: Invoice = {
      ...invoiceItem,
    };
    setInvoices((prevState: Invoice[]) => [newInvoice, ...prevState]);
    localStorage.setItem("invoices", JSON.stringify([newInvoice, ...invoices]));
  };

  const editInvoice = (invoiceItem: Invoice[]) => {
    setInvoices(invoiceItem);
    localStorage.setItem("invoices", JSON.stringify(invoiceItem));
  };

  const deleteInvoice = (id: string) => {
    const newInvoice = invoices.filter((invoice: Invoice) => {
      return id !== invoice.id;
    });
    setInvoices(newInvoice);
    localStorage.setItem("invoices", JSON.stringify(newInvoice));
  };

  const viewInvoice = (id: string) => {
    return invoices.filter((invoices: Invoice) => invoices.id === id);
  };

  const addPaidInvoice = (id: string) => {
    const newInvoice = invoices.map((invoice: Invoice) => {
      if (id === invoice.id) {
        return { ...invoice, status: "paid" };
      }
      return invoice;
    });
    localStorage.setItem("invoices", JSON.stringify(newInvoice));
    setInvoices(newInvoice);
  };

  const filterInvoice = (status: string) => {
    const filterData: Invoice | any = JSON.parse(
      localStorage.getItem("invoices") || "{}"
    );
    if (status === "paid") {
      const newInvoice = filterData.filter(
        (invoices: Invoice) => invoices.status === "paid"
      );
      setInvoices(newInvoice);
    } else if (status === "draft") {
      const newInvoice = filterData.filter(
        (invoices: Invoice) => invoices.status === "draft"
      );
      setInvoices(newInvoice);
    } else if (status === "pending") {
      const newInvoice = filterData.filter(
        (invoices: Invoice) => invoices.status === "pending"
      );
      setInvoices(newInvoice);
    } else {
      setInvoices(invoices);
    }
    return invoices;
  };

  return (
    <AppContext.Provider
      value={{
        invoices,
        createPaidInvoice,
        createDraftInvoice,
        filterInvoice,
        addPaidInvoice,
        deleteInvoice,
        editInvoice,
        viewInvoice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
