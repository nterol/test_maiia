import navigationReducer from "../navigationReducer";
import shoppinBasketReducer from "../shoppingBasketReducer";
import {
  nextPage,
  prevPage,
  goToPage,
  setMaxPage,
  addArticle,
  removeArticle,
} from "../actionTypes";

describe("navigation reducer test suite", () => {
  let navigationState = {
    currentPage: 1,
    maxPagesReached: null,
  };

  it("should increment page", () => {
    navigationState = navigationReducer(navigationState, { type: nextPage });
    expect(navigationState).toEqual({ currentPage: 2, maxPagesReached: null });
  });

  it("should decrement page", () => {
    navigationState = navigationReducer(navigationState, {
      type: prevPage,
    });
    expect(navigationState).toEqual({ currentPage: 1, maxPagesReached: null });
  });

  it("should go to specific page", () => {
    navigationState = navigationReducer(navigationState, {
      type: goToPage,
      payload: 5,
    });

    expect(navigationState).toEqual({ currentPage: 5, maxPagesReached: null });
  });

  it("should set max page and prevent navigation from going further", () => {
    navigationState = navigationReducer(navigationState, {
      type: setMaxPage,
      payload: 5,
    });
    expect(navigationState).toEqual({ currentPage: 5, maxPagesReached: 5 });
    navigationState = navigationReducer(navigationState, {
      type: goToPage,
      payload: 6,
    });
    expect(navigationState).toEqual({ currentPage: 5, maxPagesReached: 5 });
    navigationState = navigationReducer(navigationState, { type: nextPage });
    expect(navigationState).toEqual({ currentPage: 5, maxPagesReached: 5 });
  });
});

describe("shopping bag reducer test suite", () => {
  let shoppinBasketState = [];
  it("should add element to basket", () => {
    shoppinBasketState = shoppinBasketReducer(shoppinBasketState, {
      type: addArticle,
      payload: 1,
    });
    expect(shoppinBasketState).toEqual([{ id: 1, quantity: 1 }]);
  });
  it("should increase quantity in basket", () => {
    shoppinBasketState = shoppinBasketReducer(shoppinBasketState, {
      type: addArticle,
      payload: 1,
    });
    expect(shoppinBasketState).toEqual([{ id: 1, quantity: 2 }]);
  });
  it("should decrement quantity in basket", () => {
    shoppinBasketState = shoppinBasketReducer(shoppinBasketState, {
      type: removeArticle,
      payload: 1,
    });
    expect(shoppinBasketState).toEqual([{ id: 1, quantity: 1 }]);
  });
  it("should delete element from basket", () => {
    shoppinBasketState = shoppinBasketReducer(shoppinBasketState, {
      type: removeArticle,
      payload: 1,
    });
    expect(shoppinBasketState).toEqual([]);
  });
});
