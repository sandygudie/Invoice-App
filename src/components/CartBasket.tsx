import { FaShoppingBasket } from "react-icons/fa";
import { CART_ITEM } from "./data";

function CartBasket() {
  return (
    <>
      <div className="relative text-white p-3 text-xl bg-primary rounded-full">
        <span className="absolute text-black font-bold rounded-full text-xs right-0 top-0 px-1 bg-white">
          {CART_ITEM.length}
        </span>
        <FaShoppingBasket />
      </div>
    </>
  );
}

export default CartBasket;
