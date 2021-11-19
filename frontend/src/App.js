import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />

            <Route path='/cart'>
              <Route path=':productId' element={<CartScreen />} />
              <Route path='' element={<CartScreen />} />
            </Route>

            <Route path='/login'>
              <Route path='' element={<LoginScreen />} />
              <Route path='shipping' element={<ShippingScreen />} />
            </Route>

            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/order/:orderId' element={<OrderScreen />} />
            <Route path='/page/:pageNumber' element={<HomeScreen />} />

            <Route path='/search'>
              <Route path=':keyword' element={<HomeScreen />} />
              <Route
                path=':keyword/page/:pageNumber'
                element={<HomeScreen />}
              />
              <Route path=':keyword/sort/:sort' element={<HomeScreen />} />
            </Route>

            <Route path='/admin'>
              <Route path='userlist' element={<UserListScreen />} />
              <Route path='orderlist' element={<OrderListScreen />} />
              <Route path='productlist' element={<ProductListScreen />} />
              <Route path='user/:userId/edit' element={<UserEditScreen />} />
              <Route
                path='product/:productId/edit'
                element={<ProductEditScreen />}
              />
              <Route
                path='productlist/:pageNumber'
                element={<ProductListScreen />}
              />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
