import * as Yup from "yup";
import {InitialValues} from "../../types"

export const validationSchema = Yup.object().shape({
  senderAddress: Yup.object().shape({
    street: Yup.string().required("All fields is required."),
    city: Yup.string().required("All fields is required."),
    country: Yup.string().required("All fields is required."),
    postCode: Yup.string().required("All fields is required."),
  }),
  clientName: Yup.string().required("All fields is required."),
  clientEmail: Yup.string().required("All fields is required."),
  clientAddress: Yup.object().shape({
    street: Yup.string().required("All fields is required."),
    city: Yup.string().required("All fields is required."),
    country: Yup.string().required("All fields is required."),
    postCode: Yup.string().required("All fields is required."),
  }),
  createdAt: Yup.date().required("All fields is required."),
  paymentTerms: Yup.number().required("All fields is required."),
  description: Yup.string().required("All fields is required."),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("All fields is required."),
        quantity: Yup.number()
          .typeError("Invalid input.")
          .required("All fields is required."),
        price: Yup.number()
          .typeError("Invalid input.")
          .required("All fields is required."),
        total: Yup.number(),
      })
    )
    .min(1, "Add an item."),
});

export const initialValues:InitialValues = {
  createdAt: new Date(),
  paymentTerms: 1,
  description: "",
  paymentMethod :"Credit-card",
  currency:"$",
  senderAddress: {
    street: "",
    city: "",
    country: "Andorra",
    postCode: "",
  },
  clientAddress: {
    street: "",
    city: "",
    country: "Andorra",
    postCode: "",
  },
  clientName: "",
  clientEmail: "",
  items: [],
};
