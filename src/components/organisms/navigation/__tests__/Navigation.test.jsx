import React from "react";
import { render, wait, fireEvent, cleanup, waitForElement } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import Navigation from "../../../navigation";
import { Provider } from "react-redux";

import * as reduxHook from "react-redux";
import { nextPage, prevPage, goToPage } from "../../../../redux/actionTypes";

const mockStore = configureMockStore([]);

const mockDispatch = jest.fn();

async function setUp(currentPage, maxPagesReached) {
  const mockedStore = mockStore({
    navigation: { currentPage, maxPagesReached },
  });

  const tree = render(
    <Provider store={mockedStore}>
      <Navigation />
    </Provider>,
  );

  await wait();
  return tree;
}

describe("Navigation test suite", () => {
  afterEach(cleanup);
  jest.spyOn(reduxHook, "useDispatch").mockImplementation(() => mockDispatch);

  it("Page one : only next button", async () => {
    const { queryByTestId } = await setUp(1);

    const nextButton = queryByTestId("button-next");
    const previousButton = queryByTestId("button-previous");

    expect(nextButton).toBeTruthy();
    expect(previousButton).not.toBeTruthy();

    fireEvent.click(nextButton);

    expect(mockDispatch).toHaveBeenCalledWith({ type: nextPage });
  });

  it("Page two: both button", async () => {
    const { queryByTestId } = await setUp(2);

    const nextButton = queryByTestId("button-next");
    const previousButton = queryByTestId("button-previous");

    expect(nextButton).toBeTruthy();
    expect(previousButton).toBeTruthy();

    fireEvent.click(previousButton);

    expect(mockDispatch).toHaveBeenCalledWith({ type: prevPage });
  });

  it("Page Max: no next button", async () => {
    const { queryByTestId, getByRole } = await setUp(10, 10);

    const nextButton = queryByTestId("button-next");
    const previousButton = queryByTestId("button-previous");
    const backToPageOne = getByRole("button", { name: "1" });
    const prevPage = getByRole("button", { name: "9" });
    const dotdot = getByRole("button", { name: "..." });

    expect(nextButton).not.toBeTruthy();
    expect(previousButton).toBeTruthy();
    expect(prevPage).toHaveTextContent("9");

    await waitForElement(() => fireEvent.click(backToPageOne));

    expect(mockDispatch).toHaveBeenCalledWith({ type: goToPage, payload: 1 });

    fireEvent.click(dotdot);

    expect(mockDispatch).toHaveBeenCalledWith({ type: goToPage, payload: 5 });
  });
});
