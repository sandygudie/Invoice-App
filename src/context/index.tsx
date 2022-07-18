import { createContext, ReactNode, useEffect, useState } from "react";
import { randomId } from "../utils";
import { data } from "../data";
import { Invoice, AppContextState } from "../types";

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

  const createPaidInvoice = (invoice: Invoice | any) => {
    const { items } = invoice;
    const total_invoice = items.reduce((accumulator: number, object: any) => {
      return accumulator + object.total;
    }, 0);
    const newInvoice: Invoice = {
      id: randomId(),
      ...invoice,
      total: total_invoice,
    };
    setInvoices((prevState: Invoice[]) => [newInvoice, ...prevState]);
    localStorage.setItem("invoices", JSON.stringify(newInvoice));
  };

  const createDraftInvoice = (invoice: Invoice | any) => {
    const { items } = invoice;
    const total_invoice = items?.reduce((accumulator: number, object: any) => {
      return accumulator + object.total;
    }, 0);
    const newInvoice: Invoice = {
      id: randomId(),
      ...invoice,
      total: total_invoice,
    };

    setInvoices((prevState: Invoice[]) => [newInvoice, ...prevState]);
    localStorage.setItem("invoices", JSON.stringify(newInvoice));
  };

  const editInvoice = (updatedInvoice: Invoice | any, id: string) => {
    const newInvoice = invoices.map((invoice: Invoice) => {
      if (id === invoice.id) {
        return {
          ...invoice,
          status: "pending",
          senderAddress: updatedInvoice.senderAddress,
          clientName: updatedInvoice.clientName,
          clientEmail: updatedInvoice.clientEmail,
          clientAddress: updatedInvoice.clientAddress,
          createdAt: new Date(updatedInvoice.createdAt),
          paymentTerms: updatedInvoice.paymentTerms,
          description: updatedInvoice.description,
          items: updatedInvoice.items,
        };
      }
      return invoice;
    });
    setInvoices(newInvoice);
    localStorage.setItem("invoices", JSON.stringify(newInvoice));
  };

  const deleteInvoice = (id: string) => {
    const newInvoice = invoices.filter((invoice: Invoice) => {
      return id !== invoice.id;
    });
    setInvoices(newInvoice);
    localStorage.setItem("invoices", JSON.stringify(newInvoice));
  };

  const viewInvoice = (id: string) => {
    return invoices.filter((invoices: Invoice | any) => invoices.id === id);
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
