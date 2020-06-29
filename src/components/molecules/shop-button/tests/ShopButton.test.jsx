import { fireEvent, waitForElement } from "@testing-library/react";

import ShopButton from "../ShopButton";
import { addArticle, removeArticle } from "../../../../redux/actionTypes";
import setUpWithProvider from "../../../../helpers/jest/setUpWithProvider";
import {
  spyDispatch,
  initSpyDispatch,
} from "../../../../helpers/jest/spyDispatch";

const setUpWithShopButton = setUpWithProvider(ShopButton, {articleId: 3});
initSpyDispatch();

describe("ShopButton test suite ", () => {
  it("should add to basket", async () => {
    const { getByRole } = setUpWithShopButton({
      shoppingBag: [
        { id: 1, quantity: 2 },
        { id: 3, quantity: 5 },
      ],
    });

    const shopButton = getByRole("button", { name: "+" });

    await waitForElement(() => fireEvent.click(shopButton));

    expect(spyDispatch).toHaveBeenCalledWith({ type: addArticle, payload: 3 });
  });

  it("should add to basket", async () => {
    const { getByRole } = setUpWithShopButton({
      shoppingBag: [
        { id: 1, quantity: 2 },
        { id: 3, quantity: 5 },
        { id: 2, quantity: 1 },
      ],
    });

    const shopButton = getByRole("button", { name: "-" });

    await waitForElement(() => fireEvent.click(shopButton));

    expect(spyDispatch).toHaveBeenCalledWith({
      type: removeArticle,
      payload: 3,
    });
  });
});
