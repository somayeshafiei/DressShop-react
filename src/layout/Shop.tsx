import { useState, useEffect } from 'react';
import Filter from './Filter';
import getData from '../services/Api/getData';
import { ProductDetail } from '../Interfaces/Interfaces';
import Card from '../components/Card';
export default function Shop() {
  const [products, setProducts] = useState<ProductDetail[]>();
  const [productCounter, setProductCounter] = useState(0);
  useEffect(() => {
    console.log(products);

    getData('/products').then((res) => {
      setProducts(res.data);
      console.log(products);
      setProductCounter(res.data.length);
    });
  }, []);
  return (
    <div className="w-[70%]">
      <Filter productCounter={productCounter} />
      <div className="grid grid-cols-12 gap-6 py-8">
        {products?.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
