import { useContext, useEffect, useState } from "react";
import { AppContextState } from "../../../types";
import { AppContext } from "../../../context";
import InvoiceList from "./InvoiceList";
import CreateInvoice from "../create";
import Header from "./header";
import { motion } from "framer-motion";

function Invoice() {
  const { invoices } = useContext(AppContext) as AppContextState;
  const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    let temp: HTMLElement | null | any =
      document.getElementById("app_container");
    if (isOpen) {
      temp.style.position = "fixed";
    } else {
      temp.style.position = "initial";
    }
  }, [isOpen]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto px-4 lg:pl-4 lg:w-[45rem] w-full">
        <Header setOpen={setIsOpen} invoices={invoices} />
        <InvoiceList invoices={invoices} />
      </div>
      {isOpen && <CreateInvoice setOpen={setIsOpen} />}
    </motion.div>
  );
}

export default Invoice;
