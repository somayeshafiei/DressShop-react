import Select from '../components/Select';
interface Props {
  productCounter: number;
}

export default function Filter({ productCounter }: Props) {
  return (
    <div className="w-full border-b border-gray-400 p-3 flex justify-between">
      <div className="w-1/3">{productCounter} Products</div>
      <form className="flex w-2/3 justify-between">
        <div className="flex items-center gap-1 justify-center">
          <label htmlFor="">Order</label>
          <Select options={['Lowest', 'Highest']} />
        </div>
        <div className="flex items-center gap-1 justify-center">
          <label htmlFor="">Filter</label>
          <Select options={['All', 'XS', 'S', 'M', 'L', 'XL', 'XXL']} />
        </div>
      </form>
    </div>
  );
}
