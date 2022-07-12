 import { Form, Formik, useFormikContext } from "formik";
// import { Dispatch, LegacyRef, SetStateAction } from "react";
// import { MdDelete } from "react-icons/md";
// import * as Yup from "yup";
// import InputField from "./InputField";

// interface Item {
//   itemName: string;
//   qty: number | any;
//   price: number | any;
// }

// interface Props {
//   itemRef: LegacyRef<HTMLButtonElement> | any;
//   inputList: Item[];
//   setInputList: Dispatch<SetStateAction<Item[]>>;
//   openItem: string;
//   setOpenItem: Dispatch<React.SetStateAction<string>>;
// }
// const ItemSchema = Yup.object().shape({
//   itemName: Yup.string().required(),
//   qty: Yup.number().required(),
//   price: Yup.number().required(),
// });

// const AddNewItem = ({
//   itemRef,
//   inputList,
//   setInputList,
//   setOpenItem,
//   openItem,
// }: Props) => {
//   // handle input change
//   const handleInputChange = (e: any, index: number) => {
//     const { name, value } = e.target;
//     const list: any = [...inputList];
//     list[index][name] = value;
//     setInputList(list);
//   };

//   // handle click event of the Remove button
//   const handleRemoveClick = (index: number) => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setInputList(list);
//     // console.log(openItem)
//   };

//   // handle click event of the Add button
//   const handleAddClick = () => {
//     setOpenItem("true");

//     const item: Item = { itemName: "", qty: "", price: "" };
//     setInputList([...inputList, item]);
//   };

//   return (
//     <div className="my-8">
//       <h1 className=" text-lg font-bold text-gray-200/20 my-4"> Item List</h1>
//       {openItem && (
//         <>
//           <table>
//             <thead>
//               <tr>
//                 <th>Company</th>
//                 <th>Contact</th>
//                 <th>Country</th>
//                 <th>Contact</th>
//                 <th>Country</th>
//               </tr>
//             </thead>

//             <tbody>
            
//               {inputList.map((x, i) => {
//                 return (
//                   <Formik
//                     key={i}
//                     initialValues={x}
//                     validationSchema={ItemSchema}
//                     onSubmit={() => {}}
//                   >
//                     {({ handleSubmit }) => (
//                       <Form
//                         onChange={(e) => handleInputChange(e, i)}
//                         onSubmit={handleSubmit}
//                         className="flex gap-x-4 items-center justify-between"
//                       >
//                         {/* <div className="flex"> */}
//                         <tr>
//                         <td>
//                           {/* <InputField
//                             type={"text"}
//                             name="itemName"
//                             label="Item Name"
//                           /> */}
//                           items
//                         </td>
//                         {/* <div className="flex items-center w-50 ml-4 gap-x-4 "> */}
//                         <td>
//                           {/* <InputField
//                             type={"text"}
//                             name="itemName"
//                             label="Item Name"
//                           /> */}
//                           items
//                         </td>
//                         <td>
//                           {/* <InputField
//                             type={"text"}
//                             name="itemName"
//                             label="Item Name"
//                           /> */}
//                           items
//                         </td>
//                         <td>
//                           {/* <InputField
//                             type={"text"}
//                             name="itemName"
//                             label="Item Name"
//                           /> */}
//                           items
//                         </td>
//                         <td>
//                           <div className="btn-box w-60">
//                             <MdDelete
//                               onClick={() => {
//                                 handleRemoveClick(i);
//                               }}
//                             />
//                             {/* <input
//                           type="button"
//                           className="mr-10"
//                           value="remove"
//                           onClick={() => {
//                             handleRemoveClick(i);
//                           }}
//                         /> */}
//                           </div>
//                         </td>
//                        <td>
                      
//                         <button
//                           className=" hidden dark:bg-secondary w-full rounded-3xl p-3 bg-gray-100"
//                           ref={itemRef}
//                           type="submit"
//                         >
//                           Add
//                         </button>
//                         </td>
//                         </tr>
//                       </Form>
//                     )}
//                   </Formik>
//                 );
//               })}
           
//             </tbody>
//           </table>
//         </>
//       )}

//       <button
//         className=" dark:bg-secondary w-full rounded-3xl p-3 bg-gray-100"
//         onClick={handleAddClick}
//         type="button"
//       >
//         Add New Item
//       </button>
//     </div>
//   );
// };

// export default AddNewItem;

// import { Form, Formik, useFormikContext } from "formik";
// import { Dispatch, LegacyRef, SetStateAction } from "react";
// import { MdDelete } from "react-icons/md";
// import * as Yup from "yup";
// import InputField from "./InputField";

// interface Item {
//   itemName: string;
//   qty: number | any;
//   price: number | any;
// }

// interface Props {
//   itemRef: LegacyRef<HTMLButtonElement> | any;
//   inputList: Item[];
//   setInputList: Dispatch<SetStateAction<Item[]>>;
//   openItem: string;
//   setOpenItem: Dispatch<React.SetStateAction<string>>;
// }
// const ItemSchema = Yup.object().shape({
//   itemName: Yup.string().required(),
//   qty: Yup.number().required(),
//   price: Yup.number().required(),
// });

// const AddNewItem = ({
//   itemRef,
//   inputList,
//   setInputList,
//   setOpenItem,
//   openItem,
// }: Props) => {
//   // handle input change
//   const handleInputChange = (e: any, index: number) => {
//     const { name, value } = e.target;
//     const list: any = [...inputList];
//     list[index][name] = value;
//     setInputList(list);
//   };

//   // handle click event of the Remove button
//   const handleRemoveClick = (index: number) => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setInputList(list);
//     // console.log(openItem)
//   };

//   // handle click event of the Add button
//   const handleAddClick = () => {
//     setOpenItem("true");

//     const item: Item = { itemName: "", qty: "", price: "" };
//     setInputList([...inputList, item]);
//   };
//   const theadData = ["No", "Name", "Category", "Price"];
//   return (
//     <div className="my-8">
//       <h1 className=" text-lg font-bold text-gray-200/20 my-4"> Item List</h1>
//       {
//         openItem && (
//           <table className="table table-bordered">
//             <tr>
//               <th>Name</th>
//               <th>Qty</th>
//               <th>Price</th>
//               <th>Total</th>
//               <th>items</th>
//             </tr>

//             {inputList.map((x, i) => (
//               <Formik
//                 key={i}
//                 initialValues={x}
//                 validationSchema={ItemSchema}
//                 onSubmit={() => {}}
//               >
//                 {({ handleSubmit, touched }) => (
//                   <Form
//                     onChange={(e) => handleInputChange(e, i)}
//                     onSubmit={handleSubmit}
//                     className="flex gap-x-4 items-center justify-between"
//                   >
//                     <tr data-index={i}>
//                       <td>
//                         {" "}
//                         <input
//                           type="text"
//                           name="itemName"
//                           className={` w-full p-2 rounded-md border outline-0  dark:bg-secondary ${
//                              touched
//                               ? "border-error"
//                               : "border-gray-300"
//                           } `}
//                         />
//                       </td>
//                       <td>
//                         <input
//                           type="number"
//                           name="qty"
//                           className={` w-full p-2 rounded-md border outline-0  dark:bg-secondary ${
//                              touched
//                               ? "border-error"
//                               : "border-gray-300"
//                           } `}
//                         />
//                       </td>
//                       <td>
//                         <input
//                           type="number"
//                           name="price"
//                           className={` w-full p-2 rounded-md border outline-0  dark:bg-secondary ${
//                           touched
//                               ? "border-error"
//                               : "border-gray-300"
//                           } `}
//                         />
//                       </td>
//                       <td>{x.qty * x.price}</td>
//                       <td>
//                         <MdDelete
//                           onClick={() => {
//                             handleRemoveClick(i);
//                           }}
//                         />
//                         {/* <input
//                           type="button"
//                           className="mr-10"
//                           value="remove"
//                           onClick={() => {
//                             handleRemoveClick(i);
//                           }}
//                         /> */}
//                       </td>
//                     </tr>
//                   </Form>
//                 )}
//               </Formik>
//             ))}
//           </table>
//         )

//         // inputList.map((x, i) => {
//         //   return (
//         //     <Formik
//         //       key={i}
//         //       initialValues={x}
//         //       validationSchema={ItemSchema}
//         //       onSubmit={() => {}}
//         //     >
//         //       {({ handleSubmit }) => (
//         //         <Form
//         //           onChange={(e) => handleInputChange(e, i)}
//         //           onSubmit={handleSubmit}
//         //           className="flex gap-x-4 items-center justify-between"
//         //         >

//         //           {/* <div className="flex"> */}
//         //             <InputField
//         //               type={"text"}
//         //               name="itemName"
//         //               label="Item Name"

//         //             />
//         //             {/* <div className="flex items-center w-50 ml-4 gap-x-4 "> */}
//         //               <InputField
//         //                 name="qty"
//         //                 label="Qty"
//         //                 type={"number"}
//         //                 // className="w-20"
//         //               />
//         //               <InputField
//         //                 name="price"
//         //                 label="Price"
//         //                 type={"number"}
//         //                 // className="w-20"
//         //               />
//         //               <div  className="w-60">
//         //                 <label>Total</label>
//         //                 <p></p>
//         //               </div>
//         //               <div className="btn-box w-60">
//         //                 <MdDelete
//         //                   onClick={() => {
//         //                     handleRemoveClick(i);
//         //                   }}
//         //                 />
//         //                 {/* <input
//         //                   type="button"
//         //                   className="mr-10"
//         //                   value="remove"
//         //                   onClick={() => {
//         //                     handleRemoveClick(i);
//         //                   }}
//         //                 /> */}
//         //               </div>
//         //             {/* </div> */}
//         //           {/* </div>{" "} */}
//         //           <button
//         //             className=" hidden dark:bg-secondary w-full rounded-3xl p-3 bg-gray-100"
//         //             ref={itemRef}
//         //             type="submit"
//         //           >
//         //             Add
//         //           </button>
//         //         </Form>
//         //       )}
//         //     </Formik>
//         //   );
//         // })
//       }

//       <button
//         className=" dark:bg-secondary w-full rounded-3xl p-3 bg-gray-100"
//         onClick={handleAddClick}
//         type="button"
//       >
//         Add New Item
//       </button>
//     </div>
//   );
// };

// export default AddNewItem;
