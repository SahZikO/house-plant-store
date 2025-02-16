import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/cart" className="nav-link">
          Cart ({totalQuantity})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
