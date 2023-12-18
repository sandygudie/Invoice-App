function Checkbox({ label, id, value, isSelected, changed }: any) {
  return (
    <div className="p-2">
      <input
        id={id}
        className="hidden"
        onChange={changed}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label className="text-base" htmlFor={id}>
        <svg
          className={`inline-block h-[16px] w-[16px] p-1 rounded-sm border mr-4 ${
            isSelected && `bg-primary`
          }`}
          aria-hidden="true"
          viewBox="0 0 14 10"
          fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="3"
            stroke={isSelected ? "#fff" : "none"}
          />
        </svg>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
