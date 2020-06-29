import Quantity from "./Quantity";
import setUpWithProvider from "../../../helpers/jest/setUpWithProvider";

const quantityWithProvider = setUpWithProvider(Quantity, { articleId: 2 });

describe("🧮 quantity test suite", () => {
  it("should display correct amount", () => {
    const { container } = quantityWithProvider({
      shoppingBag: [{ id: 2, quantity: 1 }],
    });

    expect(container.querySelector("p")).toHaveTextContent(
      "1 item in your bag",
    );
  });
  it("should display correct number", () => {
    const { container } = quantityWithProvider({
      shoppingBag: [{ id: 2, quantity: 3 }],
    });

    expect(container.querySelector("p")).toHaveTextContent(
      "3 items in your bag",
    );
  });
});
