import { useState, useEffect } from 'react';
import Filter from './Filter';
import getData from '../services/Api/getData';
import { ProductDetail } from '../Interfaces/Interfaces';
import Card from '../components/Card';
interface Props{
  handleCart:(value:ProductDetail)=>void
}
export default function Shop({handleCart}:Props) {
  const [products, setProducts] = useState<ProductDetail[]>();
  const [productCounter, setProductCounter] = useState(0);
  useEffect(() => {
    getData('/products').then((res) => {
      setProducts(res.data);
      setProductCounter(res.data.length);
    });
  }, []);
  return (
    <div className="w-full ">
      <Filter productCounter={productCounter} />
      <div className="grid grid-cols-12 grid-row-1 gap-6 py-8 px-10 xl:px-0">
        {products?.map((product) => (
          <Card product={product} key={product.id} onClick={handleCart}/>
        ))}
      </div>
    </div>
  );
}
