import { FaShoppingBasket } from "react-icons/fa";

function CartBasket() {
  return (
    <>
      <div className="relative text-white p-3 text-xl bg-primary rounded-full">
        <span className="absolute text-black font-bold rounded-full text-xs right-0 top-0 px-1 bg-white">
          4
        </span>
        <FaShoppingBasket />
      </div>
    </>
  );
}

export default CartBasket;
