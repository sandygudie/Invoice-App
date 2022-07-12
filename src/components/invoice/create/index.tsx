import { Form, Formik } from "formik";
import { initialValues, InvoiceSchema } from "../../../utils/form/form";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ScrollToFieldError } from "../../../utils/form/fieldError";
import AddInvoice from "./AddInvoice";
import AddItem from "./additems";
import classes from "./index.module.css";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

function CreateInvoice({ setOpen, isOpen }: Props) {
  useEffect(() => {
    let temp: HTMLElement | null | any =
      document.getElementById("app_container");
    if (isOpen) {
      temp.style.position = "fixed";
    } else {
      temp.style.position = "initial";
    }
  }, []);
  const onSubmit = (values: any, e: any) => {
    e.preventDefault();
    console.log(values);
    //   createInvoice(
    //     {
    //       ...inputItem,
    //       items: inputList,
    //       createdAt: dayjs(inputItem.createdAt).format("YYYY-MM-DD"),
    //       paymentDue: dayjs(inputItem.createdAt)
    //         .add(Number(inputItem.paymentTerms), "day")
    //         .format("YYYY-MM-DD"),
    //     },
    //     "paid"
    //   );
  };

  return (
    <>
      <div className={classes.drawer} onClick={() => setOpen(false)} />
      <div
        className={`${classes.drawerContent} bg-white text-base dark:bg-skin-fill`}
      >
        <div className="pt-[6rem] pb-6 md:pb-6 lg:pt-10">
          <h5 className={classes.heading}>New Invoice</h5>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={InvoiceSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, values, errors }) => (
            <Form>
              <ScrollToFieldError />
              <div
                className={`${classes.drawerBody} h-2/5 md:h-[45%] lg:h-[48%]`}
              >
                <AddInvoice />
                <AddItem name="items" />
                {typeof errors.items === "string" ? (
                  <div className="text-error font-bold">{errors.items}</div>
                ) : null}
              </div>

              <div
                className={`bg-white text-base dark:bg-skin-fill flex justify-between items-center`}
              >
                <button
                  onClick={() => setOpen(false)}
                  className="p-3 text-xs md:text-sm rounded-3xl md:py-3 md:px-6 bg-gray-300 my-4"
                >
                  Discard
                </button>
                <div className="flex justify-between">
                  <button className="p-3 text-xs md:text-sm rounded-3xl md:py-3 md:px-4 bg-gray-200 my-4">
                    Save as Draft
                  </button>
                  <button
                    className="p-3 text-xs md:text-sm rounded-3xl md:py-3 md:px-4 bg-primary my-4"
                    type="submit"
                  >
                    Save & Send
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default CreateInvoice;
