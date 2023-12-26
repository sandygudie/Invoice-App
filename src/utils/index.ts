import dayjs from "dayjs";
import { Invoice } from "../types";
// import { data } from "../data";

const data: Invoice[] = [];

export const loadState = () => {
  let storeInvoice = localStorage.getItem("invoice");
  if (storeInvoice === null || storeInvoice === undefined) {
    return localStorage.setItem("invoice", JSON.stringify(data));
  }
  return JSON.parse(storeInvoice);
};

export const saveState = (invoiceItem: Invoice[]) => {
  localStorage.setItem("invoice", JSON.stringify(invoiceItem));
};

export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatDate = (dateValue: Date) => {
  return dayjs(dateValue).format("DD MMM YYYY");
};

export const randomId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "1234567890";
  const charLength = 2;
  const numLength = 3;
  let randomStr = "";
  let randomNum = "";

  for (let i = 0; i < charLength; i++) {
    const randomChr = Math.floor(Math.random() * characters.length);
    randomStr += characters[randomChr];
  }
  for (let i = 0; i < numLength; i++) {
    const randomChr = Math.floor(Math.random() * number.length);
    randomNum += number[randomChr];
  }
  return randomStr + randomNum;
};
