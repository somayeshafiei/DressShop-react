interface Props {
  options: string[];
  selectName: string
}

export default function Select({ options,selectName}: Props) {
  return (
    <>
      <select
        name= {selectName}
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
