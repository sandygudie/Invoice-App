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
  }, [index,setFieldValue,values.items]);

  return (
    <div className="lg:grid justify-between items-center grid-flow-col gap-x-2 block">
      <InputField
        type="text"
        name={`items[${index}].name`}
        label="Item Name"
        styles="lg:w-[12em] w-full "
        hideLabel={index > 0}
      />
      <div className="flex justify-between items-center gap-x-4 ">
        <InputField
          type="number"
          name={`items[${index}].quantity`}
          label="Qty"
          styles="lg:w-[3em] w-[9em]"
          hideLabel={index > 0}
        />

        <InputField
          type="number"
          name={`items[${index}].price`}
          label="Price"
          styles="w-[9em]"
          hideLabel={index > 0}
        />

        <InputField
          type="number"
          name={`items[${index}].total`}
          label="Total"
          disabled
          opaque
          styles="w-[7em]"
          hideLabel={index > 0}
        />
        <button className="flex justify-center items-center h-[5.5em] self-end">
          <MdDelete
            onClick={() => arrayHelpers.remove(index)}
            className="w-[1em] h-[2em]"
          />
        </button>
      </div>
    </div>
  );
}

export default Item;
