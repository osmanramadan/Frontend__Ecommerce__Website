import { useState, useEffect } from 'react';

function CartHook() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [cartLength, setCartLength] = useState(cart.length); // Initialize cart length

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartLength(cart.length); // Update cart length when cart changes
  }, [cart]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartLength(updatedCart.length); // Update cart length immediately
    window.location.reload(); 
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartLength(updatedCart.length); // Update cart length immediately
    window.location.reload(); 
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.priceafterdiscount * item.qut,
    0,
  );

  return [cart, addToCart, removeFromCart, cartTotal, cartLength];
}

export default CartHook;
