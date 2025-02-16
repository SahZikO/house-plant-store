import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, deleteItem } from "../features/cartSlice";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="shopping-cart">
      <h1 className="cart-title">Shopping Cart</h1>
      <p className="cart-summary">Total Items: {cart.totalQuantity}</p>
      <p className="cart-summary">Total Price: ${cart.totalPrice}</p>
      <div className="cart-items">
        {cart.items.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={`/images/${item.image}`}
              alt={item.name}
              className="cart-item-image"
            />
            <h3 className="cart-item-name">{item.name}</h3>
            <p className="cart-item-price">${item.price}</p>
            <div className="cart-item-controls">
              <button
                className="cart-item-button"
                onClick={() => dispatch(removeItem(item.id))}
              >
                -
              </button>
              <span className="cart-item-quantity">{item.quantity}</span>
              <button
                className="cart-item-button"
                onClick={() => dispatch(addItem(item))}
              >
                +
              </button>
              <button
                className="cart-item-delete"
                onClick={() => dispatch(deleteItem(item.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="checkout-button">Checkout (Coming Soon)</button>
      <Link to="/products" className="continue-shopping-link">
        Continue Shopping
      </Link>
    </div>
  );
};

export default ShoppingCart;
