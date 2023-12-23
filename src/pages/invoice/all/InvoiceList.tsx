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
    <div className="pb-8 relative ">
      <div className="h-96">
        {currentItems.map((item: Invoice) => (
          <InvoiceItem item={item} key={item.id} />
        ))}
      </div>
      <div className="mt-52 mb-12 ">
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
          forcePage={currentPage}
          pageLinkClassName="hover:bg-secondary/50 py-3 px-4"
          activeLinkClassName="bg-secondary py-3 px-4 rounded-sm"
          containerClassName="flex items-center gap-x-2 w-full text-sm justify-end"
          previousLinkClassName="bg-secondary py-3 px-4 rounded-sm"
          nextLinkClassName="bg-secondary py-3 px-4 rounded-sm"
        />
      </div>
    </div>
  );
}
