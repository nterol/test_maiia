import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./redux/store";
import styles from "./components/styles/layout.module.scss";
import ShoppingBag from "./pages/ShoppingBag";
import Shop from "./pages/Shop";
import Header from "./components/header/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.page}>
          <Header />
          <Switch>
            <Route exact path="/">
              <Shop />
            </Route>
            <Route path="/cart/:shoppingBag">
              <ShoppingBag />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
