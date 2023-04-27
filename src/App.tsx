import Cart from './layout/Cart';
import Header from './layout/Header';
import Shop from './layout/Shop';

function App() {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full flex gap-4 px-28">
        <Shop />
        <Cart />
      </div>
    </div>
  );
}

export default App;
