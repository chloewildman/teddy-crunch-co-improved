import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import ProductDetail from "./components/ProductDetail.jsx";

function App() {
  const [items, setItems] = useState([]);

  // API fetch
  const apiURL = import.meta.env.BASE_URL + "models/inventory.json";

  useEffect(() => {
    async function fetchInventory() {
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchInventory();
  }, []);

  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop items={items}/>} />
          <Route path="/shop/:SKU" element={<ProductDetail items={items} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;
