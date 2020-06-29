import setUpWithProvider from "../../../helpers/jest/setUpWithProvider";

import GoToPageButton from "../GoToPageButton";

const setUpWithComponent = setUpWithProvider(GoToPageButton, { page: 9 });

test("GoToPage Button matches snapshot", () => {
  const { container } = setUpWithComponent({});

  expect(container).toMatchSnapshot();
});

test("GoToPage Button matches snapshot with children", () => {
  const { getByTestId } = setUpWithProvider({});

  const button = getByTestId("goto-page-button");

  expect(button).toHaveTextContent("...");
});
