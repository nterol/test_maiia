import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";

import GoToPageButton from "./GoToPageButton";

const mockStore = configureMockStore([]);

storiesOf("Atoms/GoToPageButton", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Provider store={mockStore({})}>
      <GoToPageButton page={number("current page", 1)} />
    </Provider>
  ))
  .add("mid value", () => (
    <Provider store={mockStore({})}>
      <GoToPageButton page={number("current page", 1)}>...</GoToPageButton>
    </Provider>
  ));
