import { useFormikContext } from "formik";
import { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { InputField } from "../InputField";

function Item({ index, arrayHelpers }: any) {
  const { values, setFieldValue }: any = useFormikContext();

  useEffect(() => {
    const total = values.items[index].quantity * values.items[index].price;
    const rounded = Math.round((total + Number.EPSILON) * 100) / 100;
    setFieldValue(`items[${index}].total`, rounded || "0");
  }, [values.items[index].quantity, values.items[index].price]);

  return (
    <div className="lg:grid justify-between items-center grid-flow-col gap-x-2 block">
      <InputField
        type="text"
        name={`items[${index}].name`}
        label="Item Name"
        styles="lg:w-[200px] w-full "
        hideLabel={index > 0}
      />
      <div className="flex justify-between items-center gap-x-4 ">
        <InputField
          type="number"
          name={`items[${index}].quantity`}
          label="Qty"
          styles="lg:w-[50px]"
          hideLabel={index > 0}
        />

        <InputField
          type="number"
          name={`items[${index}].price`}
          label="Price"
          styles="lg:w-[80px] "
          hideLabel={index > 0}
        />

        <InputField
          type="number"
          name={`items[${index}].total`}
          label="Total"
          disabled
          opaque
          styles="lg:w-[80px] w-[50px]"
          hideLabel={index > 0}
        />
        <button className="flex justify-center items-center h-[5.5em] self-end">
          <MdDelete
            onClick={() => arrayHelpers.remove(index)}
            className="w-[1.5em] h-[2em]"
          />
        </button>
      </div>
    </div>
  );
}

export default Item;
