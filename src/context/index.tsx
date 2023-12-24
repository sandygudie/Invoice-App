import { createContext, ReactNode, useEffect, useState } from "react";
import { Invoice, AppContextState } from "../types";
import { loadState, saveState } from "../utils";

export const AppContext = createContext<AppContextState | null>(null);

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const data = loadState();
    setInvoices(data);
  }, [setInvoices]);

  const createPaidInvoice = (invoiceItem: Invoice) => {
    const newInvoice: Invoice = {
      ...invoiceItem,
    };
    setInvoices((prevState: Invoice[]) => [newInvoice, ...prevState]);
    saveState([newInvoice, ...invoices]);
  };

  const createDraftInvoice = (invoiceItem: Invoice) => {
    const newInvoice: Invoice = {
      ...invoiceItem,
    };
    setInvoices((prevState: Invoice[]) => [newInvoice, ...prevState]);
    saveState([newInvoice, ...invoices]);
  };

  const editInvoice = (invoiceItem: Invoice[]) => {
    setInvoices(invoiceItem);
    saveState(invoiceItem);
  };

  const deleteInvoice = (id: string) => {
    const newInvoice = invoices.filter((invoice: Invoice) => {
      return id !== invoice.id;
    });
    setInvoices(newInvoice);
    saveState(newInvoice);
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
    saveState(newInvoice);
    setInvoices(newInvoice);
  };

  return (
    <AppContext.Provider
      value={{
        invoices,
        createPaidInvoice,
        createDraftInvoice,
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
