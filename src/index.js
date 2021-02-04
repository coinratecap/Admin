/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import store from "redux/store";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

ReactDOM.render(
  <Provider store={store().store}>
    <PersistGate loading={null} persistor={store().persistor}>
      <BrowserRouter>
        <Switch>
          <Route path='/admin' render={(props) => <AdminLayout {...props} />} />
          <Route path='/auth' render={(props) => <AuthLayout {...props} />} />
          <Redirect from='/' to='/admin/index' />
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
