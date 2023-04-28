import { FilterType } from "../Interfaces/Interfaces";
import Select from "../components/Select";
interface Props {
  productCounter: number;
  handleFilter: (value: FilterType) => void;
}

export default function Filter({ productCounter, handleFilter }: Props) {
  return (
    <div className="w-full border-b border-gray-400 p-3 flex justify-between">
      <div className="w-1/3">{productCounter} Products</div>
      <form
        onChange={(event) =>
          handleFilter(Object.fromEntries(new FormData(event.currentTarget)))
        }
        className="flex w-2/3 justify-between"
      >
        <div className="flex items-center gap-1 justify-center">
          <label htmlFor="">Order</label>
          <Select selectName="order" options={["Lowest", "Highest"]} />
        </div>
        <div className="flex items-center gap-1 justify-center">
          <label htmlFor="">Filter</label>
          <Select
            selectName="size"
            options={["ALL", "XS", "S", "M", "L", "XL", "XXL"]}
          />
        </div>
      </form>
    </div>
  );
}
