import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import makeStore from "./redux/store";
import styles from "./components/styles/layout.module.scss";
import ShoppingBag from "./pages/ShoppingBag";
import Shop from "./pages/Shop";
import Header from "./components/organisms/header/Header";
import { PersistGate } from "redux-persist/integration/react";


const {store, persistor} = makeStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className={styles.page}>
            <Header />
            <Switch>
              <Route exact path="/">
                <Shop />
              </Route>
              <Route path="/cart">
                <ShoppingBag />
              </Route>
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
