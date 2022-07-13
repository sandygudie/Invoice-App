import { VscCircleFilled } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { capitalize, formatDate } from "../../../utils";
import { Invoice } from "../../../types";

interface Props {
  item: Invoice;
}

const InvoiceList = ({ item }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="md:hidden rounded-md bg-white dark:bg-secondary text-base p-4 my-4 border border-transparent hover:border-primary"
        onClick={() => {
          navigate(`invoice/${item.id}`);
        }}
      >
        <div className="flex justify-between items-center font-semibold mb-4">
          <p className="text-xs">
            {" "}
            <span className="text-primary">#</span>
            {item.id}
          </p>
          <p className="w-48 text-right text-xs text-gray-200"> {item.clientName}</p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className=" font-semibold text-xs text-gray-200 mb-2">
              Due {formatDate(item.paymentDue)}
            </p>
            <p className="font-semibold text-sm">£{item.total}</p>
          </div>
          <div
            className={`${
              item.status === "pending"
                ? "bg-warning/20 text-warning"
                : item.status === "paid"
                ? "bg-success/20 text-success"
                : "bg-gray-300"
            } py-2 text-center flex justify-center text-sm items-center font-bold rounded-md w-[110px]`}
          >
            <span className="mr-1">
              <VscCircleFilled />
            </span>{" "}
            {capitalize(item.status)}
          </div>
        </div>
      </div>

      {/* desktop view */}
      <div
        className="hidden md:flex justify-start items-center w-full rounded-md bg-white dark:bg-secondary text-base p-4 my-4 border border-transparent hover:border-primary"
        onClick={() => {
          navigate(`invoice/${item.id}`);
        }}
      >
        <p className="font-bold text-xs">
          {" "}
          <span className="text-primary">#</span>
          {item.id}
        </p>
        <p className="px-6 w-72 text-xs text-gray-200">
          Due {formatDate(item.paymentDue)}
        </p>
        <p className="w-64 text-xs text-gray-200"> {item.clientName}</p>

        <p className="font-bold w-64 text-right text-sm">£{item.total}</p>
        <div className="flex items-center ml-6">
          {" "}
          <div
            className={`${
              item.status === "pending"
                ? "bg-warning/20 text-warning"
                : item.status === "paid"
                ? "bg-success/20 text-success"
                : "bg-gray-300"
            } py-3 px-4 text-center flex justify-center items-center lg:text-xs font-bold rounded-md w-[110px]`}
          >
            <span className="mr-1 lg:text-md text-xs">
              <VscCircleFilled />
            </span>{" "}
            {capitalize(item.status)}
          </div>
          <MdOutlineKeyboardArrowRight className="text-primary ml-3 font-bold" />
        </div>
      </div>
    </>
  );
};
export default InvoiceList;
