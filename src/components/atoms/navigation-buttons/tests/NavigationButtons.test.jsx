import React from "react";
import renderer from "react-test-renderer";

import ButtonNext from "../ButtonNext";
import ButtonPrevious from "../ButtonPrevious";

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
