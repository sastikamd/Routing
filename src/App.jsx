import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './NavBar';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        // Remove if already in cart
        return prevCart.filter((item) => item.id !== product.id);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
  <>
      <NavBar cartCount={cart.length} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              onAddToCart={handleAddToCart}
              cartItems={cart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart}
              onRemove={handleRemoveFromCart}
              onQuantityChange={handleQuantityChange}
            />
          }
        />
      </Routes>
 </>
  );
}

export default App;
