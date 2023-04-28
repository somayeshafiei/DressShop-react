import { useState } from "react";
import Cart from "./layout/Cart";
import Header from "./layout/Header";
import Shop from "./layout/Shop";
import Footer from "./layout/Footer";
import { ProductDetail } from "./Interfaces/Interfaces";
function App() {
  const [cart, setCart] = useState<ProductDetail[]>([]);
  console.log(cart);
  // useEffect(()=>console.log(cart),[])
  function handleCart(product: ProductDetail) {
    const temp = cart.find((item) => item.id === product.id);
    if (temp) {
      console.log("bood");
      const newCart = cart.map((item) => {
        if (item.id === temp.id) {
          item.count &&
            (item.count++,
            (item.totalPrice = Math.floor(item.count * item.price)));
        }
        return item;
      });
      // cart.find((item) => item.id === product.id).count++;

      setCart(newCart);
    } else {
      console.log("nabood");
      product.count = 1;
      product.totalPrice = product.price;
      setCart([...cart, product]);
    }
  }

  const handleDelete = function (id: string) {
    const newItem = cart.find((item) => item.id === id);
    let newCart;
    if (newItem.count > 1) {
      newCart = cart.map((item) => {
        if (item.id === id) {
          item.count &&
            (item.count--,
            (item.totalPrice = Math.floor(item.count * item.price)));
        }
        return item;
      });
    } else {
      newCart = cart.filter((item) => item.id !== id);
    }

    setCart(newCart);
  };
  return (
    <div className="w-full relative">
      <Header />
      <div className="w-full flex flex-col gap-4 px-5 xl:flex-row pb-14 xl:pl-28">
        <Shop handleCart={handleCart} />
        <Cart cart={cart} handleDelete={handleDelete} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
