import { setMaxPage, nextPage, prevPage, goToPage } from "./actionTypes";

const initialState = { currentPage: 10000, maxPagesReached: null };

function navigationReducer(state = initialState, { type, payload }) {
  switch (type) {
    case setMaxPage:
      return {
        ...state,
        maxPagesReached: payload,
      };
    case nextPage:
      return { ...state, currentPage: state.currentPage + 1 };

    case prevPage:
      return { ...state, currentPage: state.currentPage - 1 };

    case goToPage:
      return { ...state, currentPage: payload };

    default:
      return state;
  }
}

export default navigationReducer;