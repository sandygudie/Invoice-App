import { Form, Formik } from "formik";
import { useContext } from "react";
import { AppContextState, InitialValues, Invoice } from "../../../types";
import { initialValues, validationSchema } from "../../../utils/form/validation";
import { Dispatch, SetStateAction } from "react";
import { ScrollToFieldError } from "../../../utils/form/fieldError";
import AddInvoice from "../../../components/Form/AddInvoice";
import AddItem from "../../../components/Form/Additems";
import classes from "../../../styles/index.module.css";
import dayjs from "dayjs";
import { AppContext } from "../../../context";
import { motion } from "framer-motion";
import { randomId } from "../../../utils";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function CreateInvoice({ setOpen }: Props) {
  const { createPaidInvoice, createDraftInvoice } = useContext(
    AppContext
  ) as AppContextState;

  const onSubmit = (values: InitialValues) => {
    // console.log(values)

    const total_invoice = values.items.reduce(
      (accumulator: number, object: any) => {
        return accumulator + object.total;
      },
      0
    );
    const invoiceItem: Invoice = {
      ...values,
      id: randomId(),
      total: total_invoice,
      status: "pending",
      createdAt: dayjs(values.createdAt).format("YYYY-MM-DD"),
      paymentDue: dayjs(values.createdAt)
        .add(Number(values.paymentTerms), "day")
        .format("YYYY-MM-DD"),
    };
    createPaidInvoice(invoiceItem);
    setOpen(false);
  };

  const addDraftInvoice = (values: InitialValues) => {
    const total_invoice = values.items.reduce(
      (accumulator: number, object: any) => {
        return accumulator + object.total;
      },
      0
    );
    const invoiceItem: Invoice = {
      ...values,
      id: randomId(),
      total: total_invoice,
      status: "draft",
      createdAt: dayjs(values.createdAt).format("YYYY-MM-DD"),
      paymentDue: dayjs(values.createdAt)
        .add(Number(values.paymentTerms), "day")
        .format("YYYY-MM-DD"),
    };
    createDraftInvoice(invoiceItem);
    setOpen(false);
  };

  return (
    <>
      <div className={classes.drawer} onClick={() => setOpen(false)} />
      <motion.div
        initial={{ x: "-300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${classes.drawerContent} bg-white text-base dark:bg-skin-fill`}
      >
        <div className="pt-[6rem] pb-6 md:pb-6 lg:pt-10">
          <h5 className={classes.heading}>New Invoice</h5>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              <ScrollToFieldError />
              <div className={`${classes.drawerBody} h-[68vh] md:h-[75vh]`}>
                <AddInvoice />
                <AddItem name="items" />
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
                <button
                    className="p-3 text-xs md:text-sm text-white rounded-3xl md:py-3 md:px-4 bg-primary my-4"
                    type="submit"
                  >
                    Save & Send
                  </button>
                  <button
                    type="button"
                    onClick={() => addDraftInvoice(values)}
                    className="p-3 text-xs md:text-sm text-white rounded-3xl md:py-3 md:px-4 bg-gray-200 my-4"
                  >
                    Save as Draft
                  </button>
                
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </>
  );
}

export default CreateInvoice;
