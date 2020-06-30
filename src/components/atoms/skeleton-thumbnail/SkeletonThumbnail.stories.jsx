import React from "react";
import { storiesOf } from "@storybook/react";
import SkeletonThumbnail from "./SkeletonThumbnail";

storiesOf("Atoms/SkeletonThumbnail", module).add("default", () => (
  <SkeletonThumbnail />
));
