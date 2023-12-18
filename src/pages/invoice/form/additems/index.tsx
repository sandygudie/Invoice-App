import { FieldArray, useFormikContext } from "formik";
import Item from "./Item";

const AddItem = ({ name }: string | any) => {
  const { values, errors }: any = useFormikContext();

  return (
    <div className="my-12">
      <h1 className="text-md font-bold text-primary"> Item List</h1>
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
                  quantity: 0,
                  price: 0,
                  total: "",
                });
              }}
            >
              Add New Item
            </button>

            {values.items >= 0 ? (
              typeof errors.items === "string" ? (
                <div className="text-error font-bold">{errors.items}</div>
              ) : null
            ) : (
              ""
            )}
          </div>
        )}
      />
    </div>
  );
};

export default AddItem;
