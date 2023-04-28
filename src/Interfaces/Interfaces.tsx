export type ProductDetail = {
  id: string;
  title: string;
  price: number;
  size?: string[];
  description?: string;
  url: string;
  count?: number;
  totalPrice?: number;
};
export type ButtonDetail = {
  onClick: () => void;
  text?: string;
  icon?: string;
  classes: string;
};
export type FilterType = {
  order: string;
  size: string;
};
