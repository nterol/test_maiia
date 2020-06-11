import { createSelector } from "reselect";

const selectCurrentPage = (state) => state.navigation.currentPage;
const selectMaxPagesReached = (state) => state.navigation.maxPagesReached;

export const selectNavigation = createSelector(
  selectCurrentPage,
  selectMaxPagesReached,
  (currentPage, maxPagesReached) => ({ currentPage, maxPagesReached }),
);
