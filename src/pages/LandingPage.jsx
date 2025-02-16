import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to Green Thumb</h1>
        <p className="landing-description">
          We provide the best houseplants for your home.
        </p>
        <Link to="/products">
          <button className="landing-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
