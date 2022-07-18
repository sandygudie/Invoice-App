import { Form, Formik } from "formik";
import { useContext } from "react";
import { AppContextState, Invoice } from "../../../types";
import { validationSchema } from "../../../utils/form/form";
import { Dispatch, SetStateAction } from "react";
import { ScrollToFieldError } from "../../../utils/form/fieldError";
import AddInvoice from "../form/AddInvoice";
import AddItem from "../form/additems";
import classes from "../../../styles/index.module.css";
import { AppContext } from "../../../context";
import { motion } from "framer-motion";
interface Props {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  invoice: Invoice;
  id: string;
}

function EditInvoice({ setIsEdit, id, invoice }: Props) {
  const { editInvoice } = useContext(AppContext) as AppContextState;

  const onSubmit = (values: any) => {
    const invoice = {
      ...values,
    };
    editInvoice(invoice, id);
    setIsEdit(false);
  };

  return (
    <>
      <div className={classes.drawer} onClick={() => setIsEdit(false)} />

      <motion.div
        initial={{ x: "-300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${classes.drawerContent} bg-white text-base dark:bg-skin-fill`}
      >
        <div className="pt-[6rem] pb-6 md:pb-6 lg:pt-10">
          <h5 className={classes.heading}>Edit {id}</h5>
        </div>
        <Formik
          initialValues={{
            senderAddress: invoice.senderAddress,
            clientName: invoice.clientName,
            clientEmail: invoice.clientEmail,
            clientAddress: invoice.clientAddress,
            createdAt: new Date(invoice.createdAt),
            paymentTerms: invoice.paymentTerms,
            description: invoice.description,
            items: invoice.items,
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ handleSubmit, errors, values }) => (
            <Form onSubmit={handleSubmit}>
              <ScrollToFieldError />
              <div className={`${classes.drawerBody} h-[68vh] md:h-[75vh]`}>
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
                  onClick={() => setIsEdit(false)}
                  className="p-3 text-xs md:text-sm rounded-3xl md:py-3 md:px-6 bg-gray-300 my-4"
                >
                  Discard
                </button>
                <button
                  className="p-3 text-xs md:text-sm rounded-3xl md:py-3 md:px-4 bg-primary my-4"
                  type="submit"
                >
                  Save changes
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </>
  );
}

export default EditInvoice;

// todo look at the way Mowa did her own
