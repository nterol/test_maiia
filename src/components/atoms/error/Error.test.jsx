import React from "react";
import { render } from "@testing-library/react";

import Error from "./Error";

test("match snapshot", () => {
  const { container } = render(<Error>No articles could be fetched</Error>);

  expect(container).toMatchSnashot();
});
