import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Invoice } from "../types";
import { capitalize } from "../utils";
import { VscCircleFilled } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const columnHelper = createColumnHelper<Invoice>();

const columns = [
  columnHelper.accessor("id", {
    header: () => <span className="text-left flex"> ID</span>,
    cell: (info) => <span className="font-bold">{info.getValue()}</span>,
  }),

  columnHelper.accessor("clientName", {
    header: () => "Client",
    cell: (info) => (
      <span className="text-sm text-gray-200 font-semiBold">
        {info.renderValue()}
      </span>
    ),
  }),

  columnHelper.accessor("items", {
    header: "(Qty)",
    cell: ({ row }) => (
      <span className="font-semiBold">{row.original.items.length}</span>
    ),
  }),

  columnHelper.accessor("total", {
    header: "Amount",
    cell: ({ row }) => (
      <span className="font-semiBold">
        {row.original.currency} {row.original.total}
      </span>
    ),
  }),

  columnHelper.accessor("createdAt", {
    header: "Created-Date",
    cell: ({ row }) => (
      <span className="font-semiBold">{row.original.createdAt}</span>
    ),
  }),
  columnHelper.accessor((row) => row.paymentTerms, {
    id: "paymentTerms",
    cell: (info) => (
      <span className="text-sm text-gray-200 font-semiBold">
        {info.renderValue()}
        {""} {info.renderValue()! > 1 ? "days" : "day"}
      </span>
    ),
    header: () => "Due Date",
  }),

  columnHelper.accessor((row) => row.paymentMethod, {
    id: "paymentMethod",
    cell: (info) => (
      <span className="text-xs md:text-sm text-gray-200 font-semiBold">
        {info.renderValue()}
      </span>
    ),
    header: () => "Payment Method",
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <div className="w-full mx-auto">
        <button
          className={`${
            info.getValue() === "pending"
              ? "bg-warning/20 text-warning"
              : info.getValue() === "paid"
              ? "bg-success/20 text-success"
              : "bg-gray-300"
          } py-2.5 text-center flex justify-center text-xs md:text-sm items-center font-bold rounded-md w-[110px]`}
        >
          <span className="mr-1">
            <VscCircleFilled />
          </span>{" "}
          {capitalize(info.getValue())}
        </button>
      </div>
    ),
  }),
];

interface TableProps {
  invoices: Invoice[];
  status: string;
}
export default function Index({ invoices, status }: TableProps) {
  const data = invoices;
  const navigate = useNavigate();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <div className="py-2 w-full mx-auto h-full relative">
      <div className="overflow-auto">
        {data.length ? (
          <table
            className="max-w-[75rem] px-4 mx-auto"
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0px 14px",
            }}
          >
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="text-sm md:text-base font-bold"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody className="">
              {table.getRowModel().rows.map((row) => (
                <tr
                  onClick={() => {
                    navigate(`/invoice/${row.original.id}`);
                  }}
                  style={{ outline: "1px solid" }}
                  className="text-xs md:text-sm cursor-pointer bg-white
               dark:bg-secondary text-center outline-none rounded-md hover:outline-primary/50"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell, i) => (
                    <td
                      key={cell.id}
                      className={`${i < 1 ? "rounded-l-md" : ""} ${
                        i === 4 ? "rounded-r-md" : ""
                      } py-6`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
      {!data.length && (
        <div className="w-full text-center my-5">
          <span className="font-semiBold text-xl">No {status} invoice</span>{" "}
        </div>
      )}
      {data.length ? (
        <div className="w-full text-right my-8">
          <div className="flex flex-wrap items-center justify-end gap-2">
            <button
              className="hover:text-primary hover:bg-secondary/50 bg-secondary font-bold text-white px-2 text-xs py-2 rounded p-1"
              onClick={() => table.setPageIndex(0)}
              disabled={!table.getCanPreviousPage()}
            >
              {"<<"}
            </button>
            <button
              className="hover:text-primary hover:bg-secondary/50 bg-secondary font-bold text-white px-2 text-xs py-2 rounded p-1"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {"<"}
            </button>
            <button
              className="hover:text-primary hover:bg-secondary/50 bg-secondary font-bold text-white px-2 text-xs py-2 rounded p-1"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {">"}
            </button>
            <button
              className="hover:text-primary hover:bg-secondary/50 bg-secondary font-bold text-white px-2 text-xs py-2 rounded p-1"
              onClick={() => table.setPageIndex(table.getPageCount() - 1)}
              disabled={!table.getCanNextPage()}
            >
              {">>"}
            </button>
            <span className="flex items-center text-xs gap-1">
              <span>Page</span>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </strong>
            </span>
            <span className="text-xs items-center gap-1">
              <span className="hidden md:inline px-2">|</span>Go to page:
              <input
                name="paginate"
                type="number"
                min="0"
                defaultValue={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="border-none text-center texoutline-none font-bold focus-visible:none px-2 text-xs py-2 bg-secondary text-white rounded w-16"
              />
            </span>
            <select
              className="bg-secondary text-white h-8 font-bold text-xs py-2 outline-none rounded focus-visible:none"
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize} className="text-black">
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}
    </div>
  );
}
