import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

const products = [
  {
    id: 1,
    name: "Monstera",
    price: 25,
    category: "Indoor",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 20,
    category: "Indoor",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 15,
    category: "Succulent",
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: 30,
    category: "Indoor",
  },
  {
    id: 5,
    name: "Cactus",
    price: 10,
    category: "Succulent",
  },
  { id: 6, name: "Pothos", price: 18, category: "Indoor" },
];

const ProductListing = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-listing">
      <h1 className="product-listing-title">Our Plants</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={`/images/${product.name}.jpg`}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
