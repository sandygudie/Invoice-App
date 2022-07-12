import { FieldArray, useFormikContext } from "formik";
import Item from "./Item";

const AddItem = ({ name }: string | any) => {
  const { values }: any = useFormikContext();

  return (
    <div className="my-8">
      <h1 className=" text-lg font-bold text-gray-200/50 my-4"> Item List</h1>
      <FieldArray
        name={name}
        render={(arrayHelpers) => (
          <div>
            {values.items &&
              values.items.length > 0 &&
              values.items.map((items: any, index: number) => (
                <Item key={index} index={index} arrayHelpers={arrayHelpers} />
              ))}
            <button
              className=" dark:bg-secondary w-full rounded-3xl p-3 bg-gray-200/20"
              type="button"
              onClick={() => {
                arrayHelpers.push({
                  name: "",
                  quantity: "",
                  price: "",
                  total: "",
                });
              }}
            >
              Add New Item
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default AddItem;
