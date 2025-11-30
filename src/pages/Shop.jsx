import InventoryList from "../components/InventoryList.jsx";
import "../css/reset.css";
import "../css/styles.css";

function Shop({items}) {
    return (
        <div className="App">
            <InventoryList items={items} />
        </div>
    );
}

export default Shop;