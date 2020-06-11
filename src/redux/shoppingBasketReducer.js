import { removeArticle, addArticle } from "./actionTypes";

const initialState = [];

function shoppingBagReducer(state = initialState, { type, payload }) {
  switch (type) {
    case addArticle: {
      return [...state, payload];
    }
    case removeArticle:
      return state.filter(({ articleId }) => articleId !== payload);

    default:
      return state;
  }
}

export default shoppingBagReducer;
