import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// containers
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import NewPassword from '../containers/NewPassword';
import CreateAccount from '../containers/CreateAccount';
import EditAccount from '../containers/EditAccount';
import Products from '../containers/Products';
import DesktopMenu from '../containers/DesktopMenu';
import MobileMenu from '../containers/MobileMenu';
import MyOrders from '../containers/MyOrders';
import MyOrdersDetail from '../containers/MyOrdersDetail';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import ProductDetails from '../containers/ProductDetails';
import ProductsDetailPage from '../pages/ProductsDetailPage';

// pages
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

// assets
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/create-account" component={CreateAccount}/>
                        <Route exact path="/edit-account" component={EditAccount}/>
                        <Route exact path="/new-password" component={NewPassword}/>
                        <Route exact path="/recovery-password" component={RecoveryPassword}/>
                        <Route exact path="/products" component={Products}/>
                        <Route exact path="/desktopmenu" component={DesktopMenu}/>
                        <Route exact path="/mobilemenu" component={MobileMenu}/>
                        <Route exact path="/myorders/1" component={MyOrdersDetail}/>
                        <Route exact path="/myorders" component={MyOrders}/>
                        <Route exact path="/cart" component={ShoppingCartPage}/>
                        <Route exact path="/products/1" component={ProductsDetailPage}/>
                        <Route path="*" component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;

