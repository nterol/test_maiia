import { removeArticle, addArticle } from "./actionTypes";

const initialState = [];

const getArticleIdInBag = (state, articleId) =>
  state.findIndex(({ id }) => articleId === id);

function shoppingBagReducer(state = initialState, { type, payload }) {
  switch (type) {
    case addArticle: {
      const idInShoppingBag = getArticleIdInBag(state, payload);

      if (idInShoppingBag > -1) {
        state[idInShoppingBag].quantity += 1;
        return [...state];
      }
      return [...state, { id: payload, quantity: 1 }];
    }
    case removeArticle: {
      const idInShoppingBag = getArticleIdInBag(state, payload);

      const minusOne = state[idInShoppingBag].quantity - 1;
      if (minusOne === 0) return state.filter(({ id }) => id !== payload);

      state[idInShoppingBag].quantity = minusOne;
      return [...state];
    }

    case "clear":
      return [];

    default:
      return state;
  }
}

export default shoppingBagReducer;
