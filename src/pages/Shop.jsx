import { useCart } from "../components/context";
import item1 from '../assets/1.webp'
import item2 from '../assets/2.webp'
import item3 from '../assets/3.webp'
import item4 from '../assets/4.webp'

const products = [
  {
    id: 1,
    title: "Fate/stay Night",
    image: item1,
  },
  {
    id: 2,
    title: "Fate/hollow Ataraxia",
    image: item2,
  },
  {
    id: 3,
    title: "The Witch on the Holy Night",
    image: item3,
  },
  {
    id: 4,
    title: "Fate/samurai Remnant",
    image: item4,
  }
];

function Shop() {
  const { addToCart } = useCart();

  return (
    <div id="shop">
      <h1>Shop</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;