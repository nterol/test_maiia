import React from "react";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { toHaveAttribute } from "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "../Header";


const mockStore = configureMockStore([]);

expect.extend({ toHaveAttribute });

function setUp(shoppingBag) {
  const mockedStore = mockStore({ shoppingBag });
  const tree = render(
    <Provider store={mockedStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  return tree;
}

describe("Header test suite", () => {
  it("Should not have badge", () => {
    const { container } = setUp([]);

    expect(container).toMatchSnapshot();
  });

  it("Should not have badge", () => {
    const { container } = setUp([1, 2, 3]);

    expect(container).toMatchSnapshot();
    const linkWithBadge = container.querySelector(".badge");

    expect(linkWithBadge).toHaveAttribute("data-count", "3");
  });
});
