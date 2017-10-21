import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import createBrowserHistory from "history/createBrowserHistory";
import Header from "./pages/header";
import Customers from "./pages/customers";
import CustomerAddEdit from "./pages/customerAddEdit";
import Home from "./pages/home";
import PageNotFound from "./pages/pageNotFound";

import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "toastr/build/toastr.min.css";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import "../public/style.css";

const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/customer" component={CustomerAddEdit} />
            <Route path="/customer/:id" component={CustomerAddEdit} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById("app-root")
);
