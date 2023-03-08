import React from 'react';
import '@styles/global.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from '../containers/Layout.jsx';
import Home from '../pages/Home.jsx';
import Login from '../pages/Login.jsx';
import PasswordRecovery from '../pages/PasswordRecovery.jsx';
import SendEmail from '../pages/SendEmail.jsx';
import NewPassword from '../pages/NewPassword.jsx';
import MyAccount from '../pages/MyAccount.jsx';
import CreateAccount from '../pages/CreateAccount.jsx';
import Checkout from '../pages/Checkout.jsx';
import Orders from '../pages/Orders.jsx';
import NotFound from '../pages/NotFound.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    {/* en las nuevas versiones de react Switch se cambio a Routes y component a element */}
                    <Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/password-recovery" component={PasswordRecovery} />
					<Route exact path="/send-email" component={SendEmail} />
					<Route exact path="/new-password" component={NewPassword} />
					<Route exact path="/account" component={MyAccount} />
					<Route exact path="/signup" component={CreateAccount} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/orders" component={Orders} />
					<Route path="*" component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;