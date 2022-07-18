import { InputField, DatePicker, Select } from "./InputField";
const paymentTermsOptions = [
  { name: "Net 1 Day", value: 1 },
  { name: "Net 7 Days", value: 7 },
  { name: "Net 14 Days", value: 14 },
  { name: "Net 30 Days", value: 30 },
];
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
          <InputField
            name="senderAddress.country"
            type={"text"}
            label="Country"
            styles="basis-1/2"
          />
        </div>
      </div>
      <div className="mt-8">
        <p className="mb-2 text-primary font-semibold">Bill To</p>

        <InputField type={"text"} name="clientName" label="Client's Name" />
        <InputField type={"text"} name="clientEmail" label="Client's Email" />
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
          <InputField
            name="clientAddress.country"
            label="Country"
            type={"text"}
            styles="basis-1/2"
          />
        </div>
      </div>
      <div className="my-6">
        <div className="flex items-center justify-between gap-x-4">
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
      </div>
      <InputField type={"text"} label="Description" name="description" />{" "}
    </div>
  );
};

export default AddInvoice;
