import "./SingleCart.css"

const SingleCart = ({ data }) => {
    return (
        <div className="single-cart">
            <div className="cart-info">
                <div>
                    <img className="product-image" src={data.imageUrl} alt={data.productName} />
                </div>
                <div className="">
                    <h2>{data.productName}</h2>
                    <p>{data.description}</p>
                    <p>{data.price}</p>
                </div>
            </div>
            <div className="cart-actions">
                <button>Remove</button>
                <div className="quantity-controls">
                    <button>+</button>
                    <button>-</button>
                </div>
            </div>
        </div>
    )
}

export default SingleCart;
