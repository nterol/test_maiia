import { setMaxPage, nextPage, prevPage, goToPage } from "./actionTypes";

const initialState = { currentPage: 1, maxPagesReached: null };

function navigationReducer(state = initialState, { type, payload }) {
  switch (type) {
    case setMaxPage:
      return {
        ...state,
        maxPagesReached: payload,
      };
    case nextPage: {
      const { currentPage, maxPagesReached } = state;

      return {
        ...state,
        currentPage:
          maxPagesReached && currentPage === maxPagesReached
            ? maxPagesReached
            : currentPage + 1,
      };
    }

    case prevPage:
      return { ...state, currentPage: state.currentPage - 1 };

    case goToPage: {
      if (state.maxPagesReached && payload >= state.maxPagesReached)
      return { ...state, currentPage: state.maxPagesReached }
      return { ...state, currentPage: payload };
    }

    default:
      return state;
  }
}

export default navigationReducer;
