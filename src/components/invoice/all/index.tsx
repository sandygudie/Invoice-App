import { useContext, useEffect, useState } from "react";
import { AppContextState, Invoice } from "../../../types";
import { AppContext } from "../../../context";
import InvoiceList from "./InvoiceList";
import CreateInvoice from "../create";
import Header from "./header";
import { motion } from "framer-motion";
import { IoMdAdd } from "react-icons/io";


function InvoiceBoard() {
  const { invoices } = useContext(AppContext) as AppContextState;
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [filtered, setFiltered] = useState<Invoice[]>([]);

  useEffect(() => {
    let temp: HTMLElement | null | any =
      document.getElementById("app_container");
    if (isOpen) {
      temp.style.position = "fixed";
    } else {
      temp.style.position = "initial";
    }
    filterInvoice("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterInvoice = (status: string) => {
    if (status === "paid") {
      setStatus(status);
      const newInvoice = invoices.filter(
        (invoice: Invoice) => invoice.status === "paid"
      );
      setFiltered(newInvoice);
    } else if (status === "draft") {
      setStatus(status);
      const newInvoice = invoices.filter(
        (invoice: Invoice) => invoice.status === "draft"
      );
      setFiltered(newInvoice);
    } else if (status === "pending") {
      setStatus(status);
      const newInvoice = invoices.filter(
        (invoice: Invoice) => invoice.status === "pending"
      );
      setFiltered(newInvoice);
    } else {
      setStatus("Invoice");
      setFiltered([]);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mx-auto px-4 lg:pl-4 lg:w-[45rem] w-full"
      >
        <Header
          setOpen={setIsOpen}
          invoices={invoices}
          filterInvoice={filterInvoice}
        />
        {invoices.length ? (
          <InvoiceList invoices={filtered.length ? filtered : invoices} />
        ) : (
          <div className="h-screen flex flex-col gap-y-4 items-center justify-center">
            <p className="font-bold text-base"> No {status} Item</p>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="rounded-3xl font-semibold p-2 text-white flex items-center bg-primary"
            >
              {" "}
              <span className=" text-lg  p-2 bg-white rounded-full text-center text-primary">
              <IoMdAdd />
              </span>
              <span className="md:text-lg text-xs pt-1 px-2 lg:px-3">
                {" "}
                Add New <span className=""> Invoice</span>
              </span>
            </button>
          </div>
        )}
      </motion.div>
      {isOpen && <CreateInvoice setOpen={setIsOpen} />}
    </>
  );
}

export default InvoiceBoard;
