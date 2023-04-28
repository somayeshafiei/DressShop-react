interface Props {
  type: string;
  lable: string;
  name: string;
}

export default function Input({ type, lable, name }: Props) {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="pl-2" htmlFor="">
        {lable}
      </label>
      <input
        type={type}
        className="w-full p-2 border border-gray-400"
        name={name}
      />
    </div>
  );
}
