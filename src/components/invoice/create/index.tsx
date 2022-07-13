import { Form, Formik } from "formik";
import { useContext } from "react";
import { AppContextState } from "../../../types";
import { initialValues, validationSchema } from "../../../utils/form/form";
import { Dispatch, SetStateAction } from "react";
import { ScrollToFieldError } from "../../../utils/form/fieldError";
import AddInvoice from "./AddInvoice";
import AddItem from "./additems";
import classes from "./index.module.css";
import dayjs from "dayjs";
import { AppContext } from "../../../context";
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

function CreateInvoice({ setOpen, isOpen }: Props) {
  const { createInvoice } = useContext(AppContext) as AppContextState;

  // useEffect(() => {
  //   let temp: HTMLElement | null | any =
  //     document.getElementById("app_container");
  //   if (isOpen) {
  //     temp.style.position = "fixed";
  //   } else {
  //     temp.style.position = "initial";
  //   }
  // }, []);

  const onSubmit = (values: any) => {
    const invoice = {
      ...values,
      status:"paid",
      createdAt: dayjs(values.createdAt).format("YYYY-MM-DD"),
          paymentDue: dayjs(values.createdAt)
            .add(Number(values.paymentTerms), "day")
            .format("YYYY-MM-DD")
    }
      createInvoice(invoice)
      setOpen(false)
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
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, errors, values }) => (
            <Form onSubmit={handleSubmit}>
              <ScrollToFieldError />
              <div
                className={`${classes.drawerBody} h-[68vh] md:h-[75vh]`}
              >
                <AddInvoice/>
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
