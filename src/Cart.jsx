import React from 'react';

function Cart({ cartItems, onRemove, onQuantityChange }) {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="cart-container">
      <h2 style={{ textAlign: 'center' }}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <span>
                  <img src={item.image} alt={item.title} className="cart-image" />
                </span>
                <span style={{maxWidth: '20%'}}>{item.title}</span>
                <span>Rs. {item.price}</span>
                <div>
                  <button onClick={() => onQuantityChange(item.id, -1)}>-</button>
                  <span style={{ margin: '0 8px' }}>{item.quantity}</span>
                  <button onClick={() => onQuantityChange(item.id, 1)}>+</button>
                </div>
                <span>Total: Rs. {(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => onRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3 style={{ textAlign: 'end' }}>Total Price: Rs. {totalPrice.toFixed(2)}</h3>
          <h3 style={{ textAlign: 'end' }}>After 10% Discount: Rs. {discountedPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
