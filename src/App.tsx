import Cart from './layout/Cart';
import Header from './layout/Header';
import Shop from './layout/Shop';
import Footer from './layout/Footer';
function App() {
  return (
    <div className="w-full relative">
      <Header />
      <div className="w-full flex flex-col gap-4 px-5 xl:flex-row pb-14 xl:pl-28">
        <Shop />
        <Cart />
      </div>
      <Footer />
    </div>
  );
}

export default App;
