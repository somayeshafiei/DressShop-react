import Button from "../components/Button";
import Input from "../components/Input";

export default function Checkout() {
  return (
    <form className="w-full flex flex-col gap-4 lg:w-[50%]">
      <Input type="email" name="email" lable="Email" />
      <Input type="text" name="name" lable="Name" />
      <Input type="text" name="address" lable="Address" />
      <Button
        text="Checkout"
        classes="bg-yellow-400 p-4 px-6 font-semibold text-center w-full"
        onClick={() => alert("Will be sent!")}
      />
    </form>
  );
}
