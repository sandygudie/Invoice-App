import countries from "../../utils/countries";
import { InputField, DatePicker, Select } from "./InputField";

const paymentTermsOptions = [
  { name: "Net 1 Day", value: 1 },
  { name: "Net 7 Days", value: 7 },
  { name: "Net 14 Days", value: 14 },
  { name: "Net 30 Days", value: 30 },
];
const currency = [
  { name: "USD", value: "$" },
  { name: "EURO", value: "Eur" },
  { name: "GBP", value: "GBP" },
  { name: "CEDI", value: "GHC" },
  { name: "NGN", value: "NGN" },
];

const paymentMethod = [
  { name: "Credit Card", value: "Credit-card" },
  { name: "Cash", value: "Cash" },
  { name: "Bank Transfer", value: "Bank-transfer" },
  { name: "Others", value: "Other" },
  { name: "Pending", value: "Pending" },
];
const countryOption = countries.map((country) => {
  return { name: `${country.countryNameEn}`, value: country.countryNameEn };
});

const AddInvoice = () => {
  return (
    <div>
      <div>
        <p className="mb-2 text-primary font-semibold">Bill From</p>
        <InputField
          type={"text"}
          name="senderAddress.street"
          label="Street Address"
        />

        <div className="block md:flex items-center gap-x-4">
          <div className="flex justify-between gap-x-4 w-full">
            <InputField name="senderAddress.city" type={"text"} label="City" />
            <InputField
              name="senderAddress.postCode"
              type={"text"}
              label="Post Code"
            />
          </div>
   
          <Select
            options={countryOption}
            name="senderAddress.country"
            label="Country"
          />
        </div>
      </div>
      <div className="mt-8">
        <p className="mb-2 text-primary font-semibold">Bill To</p>

        <InputField type={"text"} name="clientName" label="Client's Name" />
        <InputField type={"email"} name="clientEmail" label="Client's Email" />
        <InputField
          type={"text"}
          name="clientAddress.street"
          label="Client's Address"
        />

        <div className="block md:flex items-center gap-x-4 ">
          <div className="flex justify-between gap-x-4 ">
            <InputField name="clientAddress.city" type={"text"} label="City" />
            <InputField
              name="clientAddress.postCode"
              type={"text"}
              label="Post Code"
            />
          </div>

          <Select
            options={countryOption}
            name="clientAddress.country"
            label="Country"
          />
        </div>
      </div>
      <div className="flex my-6 items-center justify-between gap-x-4">
        <div className="w-full">
          <DatePicker label="Invoice Date" name="createdAt" />
        </div>
        <div className="w-full">
          <Select
            options={paymentTermsOptions}
            name="paymentTerms"
            label="Payment Terms"
          />
        </div>
      </div>
      <div className="flex my-6 items-center justify-between gap-x-4">
        <div className="w-full">
          <Select
            options={paymentMethod}
            name="paymentMethod"
            label="Payment Method"
          />
        </div>
        <div className="w-full">
          <Select options={currency} name="currency" label="Currency" />
        </div>
      </div>
      <InputField type={"text"} label="Description" name="description" />{" "}
    </div>
  );
};

export default AddInvoice;
