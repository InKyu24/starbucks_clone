import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Main from './components/pages/main/Main';
import Menu from './components/pages/menu/Menu';
import Cart from './components/pages/cart/Cart';
import Login from './components/pages/login/Login';
import Store from './components/pages/store/Store';
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
          <Route path="login" element={<Login />} />
          <Route path='detail/:productId' element={<ProductDetail/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='store' element={<Store />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
