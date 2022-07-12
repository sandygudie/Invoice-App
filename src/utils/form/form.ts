
import * as Yup from "yup";

export const InvoiceSchema = Yup.object().shape({
    senderAddress: Yup.object().shape({
      street: Yup.string().required('All fields is required.'),
      city: Yup.string().required('All fields is required.'),
      country: Yup.string().required('All fields is required.'),
      postCode: Yup.string().required('All fields is required.'),
    }),
    clientName: Yup.string().required('All fields is required.'),
    clientEmail: Yup.string().required('All fields is required.'),
    clientAddress: Yup.object().shape({
      street: Yup.string().required('All fields is required.'),
      city: Yup.string().required('All fields is required.'),
      country: Yup.string().required('All fields is required.'),
      postCode: Yup.string().required('All fields is required.'),
    }),
    createdAt: Yup.date().required('All fields is required.'),
    paymentTerms: Yup.number().required('All fields is required.'),
    description: Yup.string().required('All fields is required.'),
    items: Yup.array().of(Yup.object().shape({
      name: Yup.string().required('All fields is required.'),
      quantity: Yup.number().typeError('Invalid input.').required('All fields is required.'),
      price: Yup.number().typeError('Invalid input.').required('All fields is required.'),
      total: Yup.number(),
  })).min(1, 'Add an item.')
  });


  export const initialValues = {
    senderAddress: {
      street: "",
      city: "",
      country: "",
      postCode: "",
    },
    clientAddress: {
      street: "",
      city: "",
      country: "",
      postCode: "",
    },
  
    clientName: "",
    clientEmail: "",
    createdAt: new Date(),
    paymentTerms: "",
    description: "",
    items:[]
  };