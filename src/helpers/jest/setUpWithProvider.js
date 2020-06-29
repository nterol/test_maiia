import React from "react";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const makeFakeStore = configureMockStore([]);

const setUpWithProvider = (Component, props = {}) => (mockStore) => {
  const fakeStore = makeFakeStore(mockStore);

  const tree = render(
    <Provider store={fakeStore}>
      <Component {...props} />
    </Provider>,
  );
  return tree;
};

export default setUpWithProvider;
