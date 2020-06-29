import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import ShopButton from "./ShopButton";

const mockStore = configureMockStore([]);

storiesOf("Molecules/ShopButton", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <Provider
      store={mockStore({
        shoppingBag: [{ id: 1 }],
      })}
    >
      <ShopButton articleId={boolean("article is in basket", false) ? 1 : 2} />
    </Provider>
  ));
