import dayjs from "dayjs";

export const formatCurrency = (amount: number, currency: string) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  });
};

export const longDate = (value: number | string, fractionalDigits = 2) => {
  return Number(Number(value).toFixed(fractionalDigits)).toLocaleString("en", {
    minimumFractionDigits: fractionalDigits,
    maximumFractionDigits: fractionalDigits,
  });
};

export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const formatDate = (dateValue: Date) => {
  return dayjs(dateValue).format("DD MMM YYYY");
};


export const randomId=()=>{
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
for (let i = 0; i < numLength ; i++) {
  const randomChr = Math.floor(Math.random() * number.length);
  randomNum += number[randomChr];
}
return randomStr + randomNum
}