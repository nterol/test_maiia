import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Error from "./Error";

const CHILDREN = "Articles could not be loaded";

storiesOf("Atoms/Error", module)
  .addDecorator(withKnobs)
  .add("default", () => <Error>{text("error message", CHILDREN)}</Error>);
