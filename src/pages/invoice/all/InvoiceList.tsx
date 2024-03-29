import ReactPaginate from "react-paginate";
import { Invoice } from "../../../types";
import InvoiceItem from "./InvoiceItem";
import { useState } from "react";

interface Props {
  invoices: Invoice[];
}

export default function InvoiceList({ invoices }: Props) {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);
  const endOffset = currentPage + itemsPerPage;
  const currentItems = invoices.slice(currentPage, endOffset);
  const pageCount = Math.ceil(invoices.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % invoices.length;
    setCurrentPage(newOffset);
  };

  return (
    <div className="pb-8 relative h-full ">
      <div className="">
        {currentItems.map((item: Invoice) => (
          <InvoiceItem item={item} key={item.id} />
        ))}
      </div>
      {invoices.length > itemsPerPage ? (
        <div className="mt-16 mb-8">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="Prev"
            renderOnZeroPageCount={null}
            initialPage={0}
            pageLinkClassName="hover:bg-secondary/50 py-2 px-4"
            activeLinkClassName="bg-secondary py-2 px-4 text-white rounded-sm"
            containerClassName="flex flex-wrap items-center font-bold  gap-x-2 w-full text-sm justify-end"
            previousLinkClassName={`${
              currentPage < 1 ? "hidden" : "block"
            } text-white bg-secondary py-2 px-4 rounded-sm`}
            nextLinkClassName={`${
              endOffset >= invoices.length ? "hidden" : "block"
            } text-white bg-secondary py-2 px-4 rounded-sm`}
          />
        </div>
      ) : null}
    </div>
  );
}
