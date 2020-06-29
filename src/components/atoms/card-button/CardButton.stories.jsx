import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";

import CardButton from "./CardButton";

storiesOf("Atoms/CardButton", module)
  .addDecorator(withKnobs)
  .add("default", () => {
    return (
      <CardButton handleClick={() => {}}>
        {select("card button icon", { add: "+", delete: "-" }, "+")}
      </CardButton>
    );
  });
