import { useState, useEffect } from "react";
import './prod_api_fetch.css';
import { useCart } from "../cart/cart";

const useProductData = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data); // Store the entire product object
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, []);

  return { product, error, loading };
};

const addCartItem = (newItem) => {
  const { cart } = useCart();
  cart.addItems(newItem);
};

const ProductCard = () => {
  const { product, error, loading } = useProductData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{`A network error was encountered: ${error}`}</p>;

  return (
    <div className="prod-card-container">
      {product.map((item) => (
        <div key={item.id} className="prod-card">
          <img className="product-image" src={item.image} alt={item.title} />
          <h1 className="prod-title">{item.title}</h1>
          <p className="prod-price">${item.price}</p>
          <p className="prod-category">{item.category}</p>
          <p className="prod-description">{item.description}</p>
          <button onClick={addCartItem}></button>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;