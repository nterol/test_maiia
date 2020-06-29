import React from "react";
import { storiesOf } from "@storybook/react";

// import { ButtonNext, ButtonPrevious } from "./index";
import ButtonPrevious from "./ButtonPrevious";
import ButtonNext from "./ButtonNext";

storiesOf("Atoms/Navigation Buttons", module)
  .add("Button previous", () => <ButtonPrevious dispatchPage={() => {}} />)
  .add("Button next", () => <ButtonNext dispatchPage={() => {}} />);
