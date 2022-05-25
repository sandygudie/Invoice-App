function Activities() {
  return (
    <div className="flex flex-col p-3 pt-11">
      <div className="h-40 px-2">
        <p className="text-sm font-semibold">INVITES</p>
        <p className="text-xs text-gray-100 pt-2">You have no invites.</p>
      </div>
      <div className="border-y border-y-gray-300 h-60 pt-3 px-2">
        <p className="text-sm font-semibold">RECENT PAYMENT</p>
        <p className="text-xs text-gray-100 pt-2">No Payment has been made.</p>
      </div>
      <div className="h-30 px-2 pt-3">
        <p className="text-sm font-semibold ">PREVIOUS ORDERS</p>
        <p className="text-xs text-gray-100 pt-2">You have created no order.</p>
      </div>
    </div>
  );
}

export default Activities;
