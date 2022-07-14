export interface Invoice {
  id: string;
  createdAt: string | date;
  paymentDue: string | date;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: Array[];
  total: number;
}

export interface AppContextState {
  invoices: Invoice[];
  deleteInvoice: (id: string) => void;
  addPaidInvoice: (id: string) => void;
  createPaidInvoice: (invoices: Invoice) => void;
  createDraftInvoice: (invoices: Invoice) => void;
  filterInvoice: (status: string) => void;
  editInvoice: (invoices: Invoice, id: string) => void;
}
