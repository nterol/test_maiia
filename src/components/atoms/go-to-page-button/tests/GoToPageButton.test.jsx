import setUpWithProvider from "../../../../helpers/jest/setUpWithProvider";

import GoToPageButton from "../GoToPageButton";

let setUpWithComponent;

test("GoToPage Button matches snapshot", () => {
  setUpWithComponent = setUpWithProvider(GoToPageButton, { page: 9 });
  const { container } = setUpWithComponent({});

  expect(container).toMatchSnapshot();
});

test("GoToPage Button matches snapshot with children", () => {
  setUpWithComponent = setUpWithProvider(GoToPageButton, {
    page: 9,
    children: "...",
  });
  const { getByTestId } = setUpWithComponent({});

  const button = getByTestId("goto-page-button");

  expect(button).toHaveTextContent("...");
});
