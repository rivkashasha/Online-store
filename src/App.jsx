import { BrowserRouter, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import shoppingCart from './assets/add-to-cart.png';
import './App.css';
import Products from './components/Products';
import Carts from './components/Carts';
import About from './components/About';
import Home from './components/Home';
import Error from './components/Error';
import { useSelector } from 'react-redux';

function App() {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
}

function Content() {
  const numOfProducts = useSelector((state) => state.products.numOfProducts);
  const location = useLocation();
  const isProductsPage = location.pathname === '/products';

  return (
    <>
      <nav>
        <NavLink to="/" activeclassname="active">Home</NavLink>
        <NavLink to="/products" activeclassname="active">products</NavLink>
        <NavLink to="/cart" activeclassname="active" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={shoppingCart} alt="shopping-cart" width="35px" height="35px" />
          <p style={{ margin: 0, marginRight: '8px', color: '#00FF00' }}>{numOfProducts}</p>
        </NavLink>
        <NavLink to="/about" activeclassname="active">About</NavLink>
      </nav>

      <div className={isProductsPage ? 'default-page' : 'centered-page'}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Carts />} />
          <Route path='/about' element={<About />} />
          <Route path='/error' element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

