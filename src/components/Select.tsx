interface Props {
  options: string[];
}

export default function Select({ options }: Props) {
  return (
    <>
      <select
        name=""
        id=""
        className=" rounded-sm px-1 border-gray-400 border-2"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}
