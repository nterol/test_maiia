import { removeArticle, addArticle } from "./actionTypes";

const initialState = [];

function shoppingBagReducer(state = initialState, { type, payload }) {
  switch (type) {
    case addArticle: {
      return [...state, payload];
    }
    case removeArticle: {
      const n = state.filter((articleId) => articleId !== payload);

      console.log(payload, state, n);
      return n;
    }

    default:
      return state;
  }
}

export default shoppingBagReducer;
