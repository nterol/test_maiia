import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { Quantity } from "./Quantity";

storiesOf("Atoms/Quantity", module)
  .addDecorator(withKnobs)
  .add("default", () => <Quantity quantity={text("quantity", 2)} />);
