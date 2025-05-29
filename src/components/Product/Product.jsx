
import './Product.css';
import { increaseNumOfProducts } from '../../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartsSlice';


const Product = ({ product }) => {
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.carts.productsList);
    const productExists = productsList.some(p => p.id === product.id);
    const handleAdd = () => {

        
        if (!productExists) {
            dispatch(increaseNumOfProducts(product));
            dispatch(addToCart(product));
        }
    };

    return (
        <div className="col-md-3 mb-4">
            <div className="card bg-light shadow-sm h-100">
                <img
                    src={product.images[0]}
                    className="card-img-top img-small"
                    alt={product.title}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                        <strong>Price:</strong> {product.price.toFixed(2)}$
                    </p>
                    <p className="card-text">
                        <button
                            onClick={handleAdd}
                            disabled={productExists}
                            className="add-to-cart-btn"
                        >
                            {productExists ? "Added" : "Add to cart"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Product;
