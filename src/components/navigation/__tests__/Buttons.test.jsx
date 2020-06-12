import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";

import ButtonNext from "../ButtonNext";
import ButtonPrevious from "../ButtonPrevious";
import GoToPageButton from "../GoToPageButton";
import { Provider } from "react-redux";

const mockStore = configureMockStore([]);

const dispatchPage = jest.fn();

test("Button Next matches snaphost", () => {
  const container = renderer.create(<ButtonNext dispatchPage={dispatchPage} />);

  expect(container).toMatchSnapshot();
});

test("Button Previous matches snapshot", () => {
  const container = renderer.create(
    <ButtonPrevious dispatchPage={dispatchPage} />,
  );

  expect(container).toMatchSnapshot();
});

test("GoToPage Button matches snapshot", () => {
  const container = renderer.create(
    <Provider store={mockStore({})}>
      <GoToPageButton page={9} />
    </Provider>,
  );

  expect(container).toMatchSnapshot();
});

test("GoToPage Button matches snapshot with children", () => {
  const { getByTestId } = render(
    <Provider store={mockStore({})}>
      <GoToPageButton page={9}>...</GoToPageButton>
    </Provider>,
  );

  const button = getByTestId("goto-page-button");

  expect(button).toHaveTextContent("...");
});
