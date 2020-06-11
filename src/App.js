import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";

import Shop from "./pages/Shop";

function App() {
  return (
    <Provider store={store}>
      <Shop />
    </Provider>
  );
}

export default App;
