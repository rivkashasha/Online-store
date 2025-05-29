import loadingIcon from '../assets/Spinner-1s-200px.gif';
import { useEffect, useState } from 'react'
import Product from './Product/Product';
import { fetchProducts } from '../api';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchProducts().then((result) => {
            setProducts(result);
            setLoading(false);
        })
    }, [])


    return (
        < div className="container align-items-start p-0" >
            <div className="row align-items-start mb-4">
                <div className="col-12 text-center">
                    <h1 className="mb-0" style={{ marginTop: '80px', whiteSpace: 'nowrap' }}>Product Catalog</h1>
                </div>
            </div>
            {loading && <img src={loadingIcon} alt="Loading" width="250px" height="250px" />}
            <div className="container d-flex justify-content-center">
                <div className="row justify-content-center gap-0.8" style={{ maxWidth: '1200px'}} >
                    {products.map(product => (
                            <Product key={product.id} product={product} />
                        ))}
                    {(!loading && products.length == 0) && <h4>no products</h4>}
                </div>
            </div>
        </div >
    )
}

export default Products;