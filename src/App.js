import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Navigation from './pages/navigation/navigation.component';
import Authentication from './pages/authentication/authentication.component';
import Shop from './pages/shop/shop.component';
import Checkout from './pages/checkout/checkout.component';
import { checkUserSession } from './store/user/user.action';

import { GlobalStyle } from './global.styles'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
        <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
    
  );
};

export default App;
