import { FiArrowLeft } from "react-icons/fi";
import CoconutIcon from "../../assets/coconut-icon.svg";
import CartBasket from "../CartBasket";
import { CART_ITEM } from "../data";
interface Props {
  open: Boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Cart({ open, setOpen }: Props) {
  const total_amount = CART_ITEM.reduce((a, b) => a + b.amount, 0);

  return (
    open && (
      <div className="fixed flex flex-col h-full w-[27rem] right-0 justify-between border-l z-20 top-0 bg-white pt-6 pb-5 overflow-auto border-gray-300">
        <div className="px-6 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FiArrowLeft
                onClick={() => setOpen(false)}
                className="text-xl text-gray-200"
              />
              <p className="ml-5 font-semibold text-lg">My Cart</p>
            </div>
            <div className="shadow-lg rounded-full">
              <CartBasket />
            </div>
          </div>
          <div className="flex mt-8 gap-y-5 flex-col">
            {CART_ITEM.map((item, i) => (
              <div
                key={i}
                className="px-4 py-4 flex bg-primary/20 items-center rounded-md justify-between"
              >
                <div className="flex">
                  <img src={CoconutIcon} alt="shop-icon" />
                  <div className="ml-2 ">
                    {" "}
                    <p className="text-xs text-gray-200 whitespace-nowrap w-[100px] overflow-hidden overflow-ellipsis">
                      {item.name}
                    </p>
                    <p className="font-bold text-lg">${item.amount}</p>
                  </div>
                </div>

                <div>
                  <select
                    value={item.weight}
                    onChange={() => null}
                    className="outline-none rounded-md text-sm font-semibold py-1 px-3"
                  >
                    {[1, 2, 3, 4].map((option) => (
                      <option key={option} value={option}>
                        {" "}
                        {option}kg
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-end w-3/12">
                  {item.seller.map((person, i) => (
                    <p
                      key={i}
                      className={`bg-primary py-1 text-center px-2 text-xs rounded-full text-white -mr-[5px] `}
                    >
                      {person}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center px-6 py-3 justify-between border-t border-t-gray-300">
          <div>
            <p className="text-sm text-gray-100">Total</p>
            <p className="font-bold">${total_amount}</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 bg-primary text-sm w-40 rounded-sm text-white"
          >
            DONE SHOPPING
          </button>
        </div>
      </div>
    )
  );
}

export default Cart;
