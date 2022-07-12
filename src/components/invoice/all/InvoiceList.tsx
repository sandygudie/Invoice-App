import { Invoice } from "../../../types";
import InvoiceItem from "./InvoiceItem";
interface Props {
  invoices: Invoice[];
}
export default function InvoiceList({ invoices }: Props) {
  return (
    <>
      {invoices.map((item: Invoice) => (
        <InvoiceItem item={item} key={item.id} />
      ))}
    </>
  );
}
