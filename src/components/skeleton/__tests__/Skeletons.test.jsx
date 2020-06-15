import React from "react";
import renderer from "react-test-renderer";

import Skeletons from "../Skeletons";

it("should match snapshot", () => {
  const snap = renderer.create(<Skeletons isLoading/>);

  expect(snap).toMatchSnapshot();
});
