import { Link } from 'react-router-dom';

function InventoryItem(item) {
    return (
            <Link to={`/shop/${item.SKU}`} className="ItemCard">
                <img src={import.meta.env.BASE_URL + item.img} alt={item.alt} />
                <p className="sku">SKU: {item.SKU}</p>
                <p className="itemName">{item.name}</p>
                <p>In stock: {item.qty}</p>
                <p>${item.price}</p>
            </Link>
    );
}

export default InventoryItem;