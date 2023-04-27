export type ProductDetail = {
  id: string;
  title: string;
  price: number;
  size?: string[];
  description?: string;
  url: string;
};
export type ButtonDetail={
  onClick: () => void;
  text?:string;
  icon?:string;
  classes:string;
}