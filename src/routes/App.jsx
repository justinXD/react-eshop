import React from 'react';
import '../styles/global.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../containers/Layout.jsx";
import Login from "../containers/login.jsx";
import RecoveryPassword from '../containers/RecoveryPassword.jsx';
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    {/* en las nuevas versiones de react Switch se cambio a Routes y component a element */}
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/recovery-password" component={ RecoveryPassword } />
                    <Route path={"*"} component={ NotFound } />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;