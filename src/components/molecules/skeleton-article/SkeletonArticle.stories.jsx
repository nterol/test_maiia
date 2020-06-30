import React from "react";
import { storiesOf } from "@storybook/react";
import SkeletonArticle from "./SkeletonArticle";
import { withKnobs, number } from "@storybook/addon-knobs";

storiesOf("Molecules/SkeletonArticle", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <SkeletonArticle
      simple={number("number of skeleton", 1)}
      duration={number("transition duration", 0.5)}
    />
  ));
