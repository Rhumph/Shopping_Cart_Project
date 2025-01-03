import Navbar from "../navbar/Navbar";
import ProdCard from "../prod_card/prod_card";
import "./shopping_page_styles.css";

function ShoppingPage() {
  return (
    <div className="content">
      <Navbar />
      <h1>Shopping Page</h1>
      <div >
        <ProdCard />
      </div>
    </div>
  );
}

export default ShoppingPage;
