import { createContext, ReactNode, useEffect, useState } from "react";

import { data } from "../data";
import { Invoice, AppContextState } from "../types";

export const AppContext = createContext<AppContextState | null>(null);

export const AppProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [invoices, setInvoices] = useState<Invoice[] | any>(data);

  useEffect(() => {
    if (localStorage.getItem("invoices") === null) {
      localStorage.setItem("invoices", JSON.stringify(data));
    }
    setInvoices(JSON.parse(localStorage.getItem("invoices") || ""));
  }, [setInvoices]);

  const deleteInvoice = (id: string) => {
    const newInvoice = invoices.filter((invoice: Invoice) => {
      return id !== invoice.id;
    });
    setInvoices(newInvoice);
    localStorage.setItem("invoices", JSON.stringify(newInvoice));
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

  const createInvoice = (invoice: Invoice | any, status: string) => {
  console.log(invoice)

    const { items } = invoice;
    const total_invoice = items.reduce((accumulator: number, object: any) => {
      return accumulator + object.total;
    }, 0);

    // const newInvoice: Invoice = {
    //   id: String(Math.random()), // not really unique - but fine for this example
    //   createdAt: invoice.createdAt,
    //   paymentDue: invoice.paymentDue,
    //   description: invoice.description,
    //   clientName: invoice.clientName,
    //   clientEmail: invoice.clientEmail,
    //   paymentTerms: invoice.paymentTerms,
    //   status: status,
    //   senderAddress: {
    //     street: invoice.senderAddress,
    //     city: invoice.senderCity,
    //     postcode: invoice.senderPostCode,
    //     country: invoice.senderCountry,
    //   },
    //   clientAddress: {
    //     street: invoice.clientAddress,
    //     city: invoice.clientCity,
    //     postcode: invoice.clientPostCode,
    //     country: invoice.clientCountry,
    //   },
    //   items: invoice.items,
    //   total: total_invoice,
    // };
    // console.log(newInvoice);
    // setInvoices([...invoice, newInvoice]);
  };

  // const updateTodo = (id: number) => {
  //   todos.filter((todo: ITodo) => {
  //     if (todo.id === id) {
  //       todo.status = true;
  //       setTodos([...todos]);
  //     }
  //   });
  // };
  // const editInvoice = (id: string) => {
  //   invoice.filter((invoice: Invoice) => {
  //     if ( invoice.id === id) {
  //       // todo.status = true;
  //       setInvoice([...invoice]);
  //     }
  //   });
  // };
  // const deleteInvoice = (id: string) => {
  // const newInvoices:[] =  invoice.filter((invoice: Invoice) => {
  //     return id !== invoice.id
  //     })
  //     setInvoices([newInvoices])
  //   localStorage.setItem('invoices', newInvoices)
  //   }

  // const viewInvoice = (id: string) => {
  //   invoices.filter((invoices: Invoice) => {
  //     if (invoices.id === id) {
  //       setDetails(invoices);
  //     }
  //     return invoices;
  //   });
  // };

  const paidFilter = (status: string) => {
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
        createInvoice,
        paidFilter,
        addPaidInvoice,
        deleteInvoice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
