import { useState, useEffect } from 'react';
import Filter from './Filter';
import getData from '../services/Api/getData';
import { FilterType, ProductDetail } from '../Interfaces/Interfaces';
import Card from '../components/Card';
interface Props {
  handleCart: (value: ProductDetail) => void;
}
export default function Shop({ handleCart }: Props) {
  const [filter, setFilter] = useState<FilterType>({
    order: 'Lowest',
    size: 'ALL',
  });
  const [products, setProducts] = useState<ProductDetail[]>();
  const [productCounter, setProductCounter] = useState<number>(0);
  const handleFilter = function (obj: FilterType) {
    setFilter(obj);
  };
  const filtered = products?.filter((item) => item.size?.includes(filter.size));
  const sorted =
    filter.order === 'Highest'
      ? filtered?.sort((a, b) => b.price - a.price)
      : filtered?.sort((a, b) => a.price - b.price);

  useEffect(() => {
    sorted
      ? setProductCounter(sorted.length)
      : getData('/products').then((res) => {
          setProducts(res.data);
          setProductCounter(res.data.length);
        });
  }, [sorted]);
  console.log(filter);

  return (
    <div className="w-full ">
      <Filter productCounter={productCounter} handleFilter={handleFilter} />
      <div className="grid grid-cols-12 grid-row-1 gap-6 py-8 px-10 xl:px-0">
        {sorted?.map((product) => (
          <Card product={product} key={product.id} onClick={handleCart} />
        ))}
      </div>
    </div>
  );
}
