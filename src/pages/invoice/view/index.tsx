import React, { useContext, useEffect, useState } from "react";
import { AppContextState, Invoice } from "../../../types";
import { AppContext } from "../../../context";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import { Params, useNavigate, useParams } from "react-router-dom";
import { capitalize, formatDate } from "../../../utils";
import classes from "./index.module.css";
import { motion } from "framer-motion";
import EditInvoice from "../edit";
import NotFoundPage from "../../NotFoundPage";

function ViewInvoice() {
  const params: Readonly<Params<string>> | any = useParams();
  const navigate = useNavigate();
  const { deleteInvoice, addPaidInvoice, viewInvoice } = useContext(
    AppContext
  ) as AppContextState;

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    let temp: HTMLElement | null | any =
      document.getElementById("app_container");
    if (isEdit) {
      temp.style.position = "fixed";
    } else {
      temp.style.position = "initial";
    }
  }, [isEdit]);

  const invoiceDetails: Invoice[] | any = viewInvoice(params.id);

  if (!invoiceDetails.length) {
    return <NotFoundPage />;
  }
  return (
    <>
      {invoiceDetails.map((item: Invoice) => (
        <div key={item.id} className="h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            key={item.id}
            className="m-auto h-full px-4 md:px-10 lg:px-0 lg:w-[45rem] max-w-[50rem] flex flex-col"
          >
            <p
              onClick={() => navigate("/invoices")}
              className="flex items-center font-semibold cursor-pointer"
            >
              {" "}
              <MdOutlineKeyboardArrowLeft className="mr-4 text-primary text-sm" />
              Go back
            </p>

            {/* Desktop*/}
            <>
              <div className="mt-4 flex justify-between px-6 py-2 rounded-md bg-white dark:bg-secondary">
                <div className="flex items-center justify-between w-full md:w-20">
                  {" "}
                  <span className="mr-4"> Status</span>
                  <div
                    className={`${
                      item.status === "pending"
                        ? "bg-warning/20 text-warning"
                        : item.status === "paid"
                        ? "bg-success/20 text-success"
                        : "bg-gray-300"
                    } py-2 px-4 flex justify-center w-[110px] items-center font-semibold rounded-md`}
                  >
                    <span className="mr-1 ">
                      <VscCircleFilled />
                    </span>{" "}
                    {capitalize(item.status)}
                  </div>
                </div>

                <div className="md:inline flex md:justify-center fixed bottom-0 right-0 bg-white w-full dark:bg-secondary py-4 md:relative md:w-auto text-white text-sm">
                  <button
                    onClick={() => {
                      setIsEdit(true);
                    }}
                    className="rounded-3xl text-sm md:text-base bg-gray-300 font-semibold  p-2 mr-2 md:py-3 md:px-5"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deleteInvoice(item.id);
                      navigate("/invoices");
                    }}
                    className="rounded-3xl text-sm md:text-base font-semibold bg-pink  p-2 mr-6 md:py-3 md:px-5"
                  >
                    Delete
                  </button>
                  {item.status !== "paid" && (
                    <button
                      onClick={() => addPaidInvoice(item.id)}
                      className="rounded-3xl text-sm md:text-base bg-primary font-semibold  p-2 md:py-3 md:px-4"
                    >
                      Mark As Paid
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-6 text-xs px-6 py-8 rounded-md bg-white dark:bg-secondary">
                <div className="flex justify-between flex-col sm:flex-row  gap-7 items-start">
                  <div className="text-left">
                    {" "}
                    <p className="font-semibold text-sm md:text-lg">
                      <span className="text-primary">#</span>
                      {item.id}
                    </p>
                    <p>Description:{item.description}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p>Address</p>
                    <div className="font-bold mt-3 text-[14px] ">
                      <p className="font-bold text-[16px]">
                        {item.senderAddress.street} {item.senderAddress.city}
                      </p>
                      <p className="my-1 font-bold text-[16px]">
                        {" "}
                        {item.senderAddress.postCode}
                      </p>
                      <p className="font-bold text-[16px]">
                        {" "}
                        {item.senderAddress.country}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex-col sm:flex-row flex gap-y-4 md:items-start justify-between text-xs my-8 text-left items-start">
                  <div className="">
                    <div className="pb-3 md:w-48">
                      <p className="pb-1">Invoice Date</p>
                      <p className="font-bold text-[15px] my-2">
                        {formatDate(item.createdAt)}
                      </p>
                      <div className="mt-4">
                        <p className="pb-1">Payment Due</p>
                        <p className="font-bold text-[15px] my-2">
                          {formatDate(item.paymentDue)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="pb-1">Sent to</p>
                    <p className="font-bold text-[15px] my-2">
                      {item.clientEmail}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col sm:flex-row mb-6 gap-x-8 items-start">
                  <div>
                    <p className="pb-2">Bill To</p>
                    <p className="font-bold text-[15px] mb-4">
                      {item.clientName}
                    </p>
                  </div>
                  <div className="my-4 md:my-0 text-left sm:text-right">
                    <p className="mb-3">Address</p>
                    <div className="font-bold text-[14px] md:w-72">
                      <p>
                        {item.clientAddress.street} {item.clientAddress.city}
                      </p>

                      <p className="my-1">{item.clientAddress.postCode} </p>
                      <p> {item.clientAddress.country}</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 rounded-tr-md rounded-tl-md bg-gray-300 dark:bg-[#2f324c]">
                  <table className={`hidden md:table ${classes.table}`}>
                    <thead>
                      <tr>
                        <th> Item Name</th>
                        <th>QTY</th>
                        <th> Price</th>
                        <th> Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      {item.items.map((itemlist: any, i: number) => (
                        <tr key={i}>
                          <td className="font-semibold"> {itemlist.name}</td>
                          <td> {itemlist.quantity}</td>
                          <td> {itemlist.price}</td>
                          <td className="font-semibold"> {itemlist.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* /mobile */}
                  {item.items.map((itemlist: any, i: number) => (
                    <div
                      key={i}
                      className="md:hidden flex justify-between items-center py-4 text-left"
                    >
                      <div>
                        <p className="font-bold mb-2">{itemlist.name}</p>
                        <p className="text-gray-100">
                          {itemlist.quantity} X {`£${itemlist.price}`}
                        </p>
                      </div>
                      <div className="font-bold">
                        £{itemlist.quantity * itemlist.price}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center rounded-br-md rounded-bl-md p-4 md:p-8 md:pr-14 text-white bg-secondary dark:bg-skin-fill">
                  <p>Total Amount</p>
                  <p className="md:text-2xl text-lg font-semibold">
                    £{item.total}
                  </p>
                </div>
              </div>
            </>
          </motion.div>
          {isEdit && (
            <EditInvoice setIsEdit={setIsEdit} id={item.id} invoice={item} />
          )}
        </div>
      ))}
    </>
  );
}

export default ViewInvoice;
