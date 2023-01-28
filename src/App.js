import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Main from './components/pages/main/Main';
import Menu from './components/pages/menu/Menu';
import Cart from './components/pages/cart/Cart'

import MenuDetail from './components/pages/menu/MenuDetail';
import ProductDetail from './components/pages/menu/ProductDetail';

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='menu' element={<Menu/>} />
          <Route path='menu/:menuId' element={<MenuDetail/>} />
          <Route path='detail/:productId' element={<ProductDetail/>} />
          <Route path='cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
