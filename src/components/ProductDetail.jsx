import { Link, useParams } from 'react-router-dom';

function ProductDetail(props) {
    let { SKU } = useParams();
    const { items } = props;
    const item = items.find(el => el.SKU === SKU);
    return (
        <div className="DetailPage">
            <div className="breadcrumbs">
                <Link to="/shop" className="breadcrumbLink">Back to Shop</Link>
            </div>
            <section className="itemListing">
                <img src={import.meta.env.BASE_URL + item.img} alt={item.alt} />
                <div className="itemDescription">
                    <div className="headingInfo">
                        <p className="itemName">{item.name}</p>
                        <p className="sku">SKU: {item.SKU}</p>
                    </div>
                    <div className="itemInfo">
                        <p>In stock: {item.qty}</p>
                        <p>${item.price}</p>
                        <p>{item.description}</p>
                    </div>
                    <div className="addToCart">
                        Add to Cart
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetail;