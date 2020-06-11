import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import navigationReducer from "./navigationReducer";
import shoppingBagReducer from "./shoppingBasketReducer";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  shoppingBag: shoppingBagReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
