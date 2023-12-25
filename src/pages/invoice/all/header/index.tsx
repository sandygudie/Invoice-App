import { Dispatch, SetStateAction, useEffect, useState, useRef } from "react";
import { Invoice } from "../../../../types";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import CheckBox from "./Checkbox";
import { IoMdAdd } from "react-icons/io";
import { FiFilter } from "react-icons/fi";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  invoices: Invoice[];
  filterInvoice: (status: string) => void;
}

function Header({ setOpen, invoices, filterInvoice }: Props) {
  const [isOpenFilter, setOpenFilter] = useState(false);
  const [status, setStatus] = useState(
    "all" || " paid" || "draft" || "pending"
  );

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpenFilter(false);
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  const radioChangeHandler = (e: any, status: string) => {
    setStatus(e.target.value);
    filterInvoice(status);
    setOpenFilter(false);
  };

  return (
    <>
      {invoices.length ? (
        <div className="flex justify-between items-center mb-8 lg:mb-12">
          {" "}
          <div>
            <div
              onClick={() => filterInvoice("")}
              className=" cursor-pointer text-base md:text-2xl lg:text-3xl font-bold block"
            >
              Invoices
            </div>
            <span className="text-sm text-gray-200 font-semibold">
              <span className="hidden md:inline"> There are total </span>
              {invoices.length} invoices
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="relative">
              <div
                className="flex items-center mr-3 lg:mr-9 cursor-pointer"
                onClick={() => {
                  setOpenFilter(!isOpenFilter);
                }}
              >
                <span className="text-lg font-bold lg:mr-2">
                <FiFilter  className="inline"/> <span className="hidden md:inline">status</span>
                </span>
                <span className="text-primary text-xl font-bold ">
                  {" "}
                  {isOpenFilter ? (
                    <MdOutlineKeyboardArrowUp />
                  ) : (
                    <MdOutlineKeyboardArrowDown />
                  )}
                </span>
              </div>

              {isOpenFilter && (
                <div
                  ref={popupRef}
                  className="absolute bg-skin-fill shadow-lg top-5 z-30 px-4 py-2 items-start w-[200px] rounded-lg flex flex-col -left-15 "
                >
                  <CheckBox
                    changed={(e: any) => radioChangeHandler(e, "paid")}
                    id="1"
                    isSelected={status === "paid"}
                    label="Paid"
                    value="paid"
                  />
                  <CheckBox
                    changed={(e: any) => radioChangeHandler(e, "draft")}
                    id="2"
                    isSelected={status === "draft"}
                    label="Draft"
                    value="draft"
                  />
                  <CheckBox
                    changed={(e: any) => radioChangeHandler(e, "pending")}
                    id="3"
                    isSelected={status === "pending"}
                    label="Pending"
                    value="pending"
                  />
                  <CheckBox
                    changed={(e: any) => radioChangeHandler(e, "all")}
                    id="4"
                    isSelected={status === "all"}
                    label="All"
                    value="all"
                  />
                </div>
              )}
            </div>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="rounded-3xl font-semibold p-2 text-white flex items-center bg-primary"
            >
              {" "}
              <span className="p-2  bg-white rounded-full text-center text-primary">
              <IoMdAdd />
              </span>
              <span className="text-xs pt-1 px-2 lg:px-3">
                {" "}
                New <span className="md:inline hidden"> Invoice</span>
              </span>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Header;
