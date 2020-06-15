import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import ShopButton from "../ShopButton";
import { addArticle, removeArticle } from "../../../redux/actionTypes";

const mockStore = configureMockStore([]);
const mockDispatch = jest.fn();

function setUp(shoppingBag) {
  const mockedStore = mockStore({ shoppingBag });

  mockedStore.dispatch = mockDispatch;

  const tree = render(
    <Provider store={mockedStore}>
      <ShopButton articleId={3} />
    </Provider>,
  );

  return tree;
}

describe("ShopButton test suite ", () => {
  it("should add to basket", async () => {
    const { getByRole } = setUp([
      { id: 1, quantity: 2 },
      { id: 3, quantity: 5 },
    ]);

    const shopButton = getByRole("button", { name: "+" });

    await waitForElement(() => fireEvent.click(shopButton));

    expect(mockDispatch).toHaveBeenCalledWith({ type: addArticle, payload: 3 });
  });

  it("should add to basket", async () => {
    const { getByRole } = setUp([
      { id: 1, quantity: 2 },
      { id: 3, quantity: 5 },
      { id: 2, quantity: 1 },
    ]);

    const shopButton = getByRole("button", { name: "-" });

    await waitForElement(() => fireEvent.click(shopButton));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: removeArticle,
      payload: 3,
    });
  });
});
