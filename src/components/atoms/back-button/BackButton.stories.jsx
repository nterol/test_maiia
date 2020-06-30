import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import BackButton from "./BackButton";

storiesOf("Atoms/BackButton", module)
  .addDecorator(StoryRouter())
  .add("default", () => <BackButton />);
