import { useContext, useEffect, useState } from "react";
import { AppContextState, Invoice } from "../../../types";
import { AppContext } from "../../../context";
// import InvoiceList from "./InvoiceList";
import CreateInvoice from "../create";
import Header from "./header";
import { motion } from "framer-motion";
import { IoMdAdd } from "react-icons/io";
import emptyState from "../../../assets/empty-state.webp";
import Table from "../../../components/Table";

function InvoiceBoard() {
  const { invoices } = useContext(AppContext) as AppContextState;
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState<Invoice[]>([]);

  useEffect(() => {
    // setFiltered(invoices)
    let temp: HTMLElement | null | any =
      document.getElementById("app_container");
    if (isOpen) {
      temp.style.position = "fixed";
    } else {
      temp.style.position = "initial";
    }
    filterInvoice(status);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(invoices)
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
    }
    // else if(status === "all"){
    //   setStatus(status);
    //   setFiltered(invoices);
    // }
    // console.log(invoices)
    else {
      setStatus("all");
      setFiltered(invoices);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mx-auto px-4 md:px-8 lg:w-[65rem] max-w-[75rem] w-full"
      >
        <Header
          setOpen={setIsOpen}
          invoices={invoices}
          filterInvoice={filterInvoice}
        />
        {!invoices?.length ? (
          <div className="h-[60vh] md:h-[80vh] flex flex-col items-center justify-center">
            <div className="w-64 md:w-96">
              <img
                src={emptyState}
                className="w-64 md:w-96"
                alt="empty-state"
              />
            </div>
            <p className="text-base my-4 text-gray-200">
              {" "}
              <span className="hidden font-semiBold text-xl">
                No {status} Item
              </span>{" "}
              Create your first invoice!
            </p>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="rounded-3xl font-semibold p-2 text-white flex items-center bg-primary"
            >
              {" "}
              <span className="text-lg p-2 bg-white rounded-full text-center text-primary">
                <IoMdAdd />
              </span>
              <span className="md:text-lg text-xs pt-1 px-2 lg:px-3">
                {" "}
                Add <span className=""> Invoice</span>
              </span>
            </button>
          </div>
        ) : (
          // <InvoiceList invoices={filtered.length ? filtered : invoices} />
          <Table status={status} invoices={filtered} />
        )}
      </motion.div>
      {isOpen && <CreateInvoice setOpen={setIsOpen} />}
    </>
  );
}

export default InvoiceBoard;
