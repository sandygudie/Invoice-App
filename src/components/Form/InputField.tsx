import { Field, useField, useFormikContext } from "formik";
import { FC, InputHTMLAttributes } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdDateRange } from "react-icons/md";
import { forwardRef } from "react";

type IInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  type: string;
  label?: string;
  styles?: string;
  disabled?: boolean;
  opaque?: boolean;
  hideLabel?: boolean;
  min?: string;
};

export const InputField: FC<IInputFieldProps> = ({
  disabled,
  opaque,
  styles,
  type,
  label,
  hideLabel,
  min,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <>
      <div className={`my-4 ${styles || "w-full"} flex flex-col`}>
        <label htmlFor={field.name} className={`${hideLabel && "hidden"}`}>
          {label}
        </label>
        <input
          {...field}
          name={field.name}
          min={min ? min : ""}
          type={type}
          className={`${
            opaque
              ? "bg-transparent border-0"
              : `w-full rounded-md border outline-0  dark:bg-secondary ${
                  error ? "border-error" : "border-gray-300"
                }`
          }  p-2 font-semibold text-sm`}
        />
      </div>
    </>
  );
};

export const DatePicker = ({ label, name }: any) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      name="createdAt"
      className="w-full font-semibold flex items-center p-2 rounded-md border outline-0 border-gray-300 dark:bg-secondary"
    >
      {value}
      <MdDateRange onClick={onClick} className=" ml-auto" />
    </button>
  ));

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <br />
      <ReactDatePicker
        id={name}
        {...field}
        selected={field.value}
        onChange={(val: Date) => {
          setFieldValue("createdAt", val);
        }}
        dateFormat="MMM d, yyyy"
        customInput={<CustomInput />}
      />
    </>
  );
};

export const Select = (props: string | any) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className="w-full flex p-2.5 rounded-md border font-semibold outline-0 border-gray-300 dark:bg-secondary"
      >
        {options.map((option: any) => {
          return (
            <option className="p-4" key={option.name} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </Field>
    </div>
  );
};
