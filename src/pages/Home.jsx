import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Our Shop</h1>
        <p>Browse our amazing products and find something you'll love.</p>
        <Link to="/shop" className="shop-now-btn">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default Home;