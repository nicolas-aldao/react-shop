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
import SessionMenu from '../components/SessionMenu';
import MobileMenu from '../containers/MobileMenu';
import MyOrders from '../containers/MyOrders';
import MyOrdersDetail from '../containers/MyOrdersDetail';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import ProductDetails from '../containers/ProductDetails';
import ProductsDetailPage from '../pages/ProductsDetailPage';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

// pages
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

// assets
import '../styles/global.css';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
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
                        <Route exact path="/sessionmenu" component={SessionMenu}/>
                        <Route exact path="/mobilemenu" component={MobileMenu}/>
                        <Route exact path="/myorders/1" component={MyOrdersDetail}/>
                        <Route exact path="/myorders" component={MyOrders}/>
                        <Route exact path="/cart" component={ShoppingCartPage}/>
                        <Route exact path="/products/1" component={ProductsDetailPage}/>
                        <Route path="*" component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;

