import { createSelector } from "reselect";

export const selectCurrentPage = (state) => state.navigation.currentPage;
export const selectMaxPagesReached = (state) =>
  state.navigation.maxPagesReached;
export const selectShoppingBag = (state) => state.shoppingBag;

export const selectNavigation = createSelector(
  selectCurrentPage,
  selectMaxPagesReached,
  (currentPage, maxPagesReached) => ({ currentPage, maxPagesReached }),
);
