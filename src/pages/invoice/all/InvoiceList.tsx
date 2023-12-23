import { Invoice } from "../../../types";
import InvoiceItem from "./InvoiceItem";
interface Props {
  invoices: Invoice[];
}
export default function InvoiceList({ invoices }: Props) {

  return (
    <div className="pb-8">
      {invoices.map((item: Invoice) => (
        <InvoiceItem item={item} key={item.id} />
      ))}
    </div>
  );
}
