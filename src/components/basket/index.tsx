import { useState } from "react";
import { FiTruck, FiCreditCard, FiSearch } from "react-icons/fi";
import { BiCube } from "react-icons/bi";
import Tabs from "../tab";
import CartBasket from "../CartBasket";
import Cart from "../cart";
import { BiStoreAlt } from "react-icons/bi";


function Basket() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" h-full px-6 pt-11">
      <div className="flex justify-between items-center mb-7">
        <h1 className="text-2xl font-semibold ">Good Evening, Laura!</h1>
        <div className="relative text-gray-300">
          <FiSearch className="absolute bottom-3 text-xl left-2" />
          <input
            type="search"
            placeholder="Search Basket"
            className="py-2 pl-9 pr-2 text-sm text-gray-200 w-50 rounded-md border outline-none border-gray-300 focus:border-primary"
          />
        </div>
      </div>
      <div className="flex justify-start flex-wrap items-center gap-8">
        
       {open && ( <div className="bg-white flex justify-start gap-x-4 items-center w-[14rem] p-4 shadow-sm rounded-lg">
          <span className="p-2 text-lg rounded-full bg-orange/[0.25] text-orange">
            {" "}
            <BiStoreAlt />
          </span>
          <div>
            <p className="text-gray-200 text-sm">Total Basket</p>
            <p className="font-bold text-lg">0</p>
          </div>
        </div>)}
        <div className="bg-white flex justify-start gap-x-4 items-center w-[14rem] p-4 shadow-sm rounded-lg">
          <span className="p-2 text-lg rounded-full bg-violet/[0.25] text-violet">
            {" "}
            <FiTruck />
          </span>
          <div>
            <p className="text-gray-200 text-sm">Intransit-Jobs</p>
            <p className="font-bold text-lg">0</p>
          </div>
        </div>
        <div className="bg-white flex justify-start gap-x-4 items-center w-[14rem] p-4 shadow-sm rounded-lg">
          <span className="p-2 text-lg rounded-full bg-primary/[0.25] text-primary">
            {" "}
            <FiCreditCard />
          </span>
          <div>
            <p className="text-gray-200 text-sm">Total Paid</p>
            <p className="font-bold text-lg ">$0.00</p>
          </div>
        </div>
        <div className="bg-white flex justify-start gap-x-4 items-center w-[14rem] p-4 shadow-sm rounded-lg">
          <span className="p-2 text-lg rounded-full bg-purple/[0.25] text-purple">
            {" "}
            <BiCube />
          </span>
          <div>
            <p className="text-gray-200 text-sm">Completed Jobs</p>
            <p className="font-bold text-lg">0</p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-5">Baskets</h2>
          <button className="p-2 text-white text-sm text-center rounded-md w-40 bg-primary hover:bg-primary/20 hover:text-primary">
            Create Basket
          </button>
        </div>
        <div>
          <Tabs />
        </div>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="absolute bottom-10 shadow-lg right-[21rem] rounded-full"
      >
        <CartBasket />
      </button>
      <Cart open={open} setOpen={setOpen} />
    </div>
  );
}

export default Basket;
