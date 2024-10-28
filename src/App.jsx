import { useState } from "react";
import Header from "./Components/Header";
import Items from "./Components/Items";
import Cart from "./Components/Cart";
import TopPoster from "./Components/TopPoster";
import Footer from "./Components/Footer";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    // console.log(item);

    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };


  const handleChange = (item, d) => {
    const tempArr = cart.map((data) => ({ ...data })); // Create a deep copy of `cart`
    const ind = tempArr.findIndex((data) => data.id === item.id);

    if (ind !== -1) {
      tempArr[ind].amount += d;

      // Ensure amount is at least 1
      if (tempArr[ind].amount < 1) {
        tempArr[ind].amount = 1;
      }

      setCart(tempArr); // Update the cart with the modified array
    }
  };


  return (
    <>
      <Header size={cart.length} setShow={setShow} />
      {show ? (
        <>
          <TopPoster />
          <Items handleClick={handleClick} />
        </>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}

      {warning && (
        <div className="text-lg font-mono text-pink-600 bg-white p-3 border-0 rounded-md right-0 top-2 fixed">
          Item is already added to your cart 😇
        </div>
      )}
      <Footer />
    </>
  );
}

export default App;
