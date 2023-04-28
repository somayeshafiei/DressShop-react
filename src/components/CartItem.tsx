import { ProductDetail } from "../Interfaces/Interfaces";
import Button from "./Button";

interface Props {
  item: ProductDetail;
  handleDelete: (value: string) => void;
}
export default function CartItem({ item, handleDelete }: Props) {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-16">
        <img src={item.url} className="w-full h-full" alt="" />
      </div>
      <div className="flex flex-col justify-start items-center gap-5">
        <h3>{item.title}</h3>
        <div className="flex gap-4 items-center">
          <span>
            ${item.totalPrice}x{item.count}
          </span>
          <Button
            text="remove"
            classes="bg-gray-200 border p-2 border-gray-400"
            onClick={() => handleDelete(item.id)}
          />
        </div>
      </div>
    </div>
  );
}
