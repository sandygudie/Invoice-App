import { useState } from "react";
import { useContext } from "react";
import { AppContextState } from "../../../types";
import { AppContext } from "../../../context";
import InvoiceList from "./InvoiceList";
import CreateInvoice from "../create";
import Header from "./header";

function Invoice() {
  const { invoices } = useContext(AppContext) as AppContextState;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="mx-auto px-4 lg:pl-4 lg:w-[45rem] w-full">
        <Header setOpen={setIsOpen} invoices={invoices} />
        <InvoiceList invoices={invoices} />
      </div>
      {isOpen && <CreateInvoice setOpen={setIsOpen} isOpen={isOpen} />}
    </>
  );
}

export default Invoice;
