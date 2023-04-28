import { ProductDetail } from '../Interfaces/Interfaces';
import Button from './Button';
interface Props {
  product: ProductDetail;
  onClick:(value:ProductDetail)=>void
}
export default function Card({ product , onClick }: Props) {
  return (
    <div className="flex flex-col col-span-12 md:col-span-6 xl:col-span-4">
      <div>
        <img src={product.url} alt="" />
      </div>
      <div className="text-center p-4">{product.title}</div>
      <div className="flex justify-between items-center">
        <span>${product.price}</span>
        <Button
          classes="bg-yellow-500 p-3"
          onClick={() =>onClick(product)}
          text="add to cart"
        />
      </div>
    </div>
  );
}
