import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import createBrowserHistory from "history/createBrowserHistory";

import Costomers from "./pages/costomers";
import CostomerAddEdit from "./pages/costomerAddEdit";
//import "style/style.css";
//import "/bootstrap/css/bootstrap.min.css";
import "toastr/build/toastr.min.css";
//import "style/font-awesome.min.css";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";

const history = createBrowserHistory();
//const store = configureStore();

render(
  <Provider store={store}>
    <Router history={history}>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Costomers} />
          <Route exact path="/add" component={CostomerAddEdit} />
          <Route path="/edit/:id" component={CostomerAddEdit} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("app-root")
);
