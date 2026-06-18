import { useCart } from "../components/context";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div id="cart">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div id="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p>Qty: {item.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;