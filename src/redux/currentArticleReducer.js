const initialState = [];

function currentArticlesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "add_article": {
      return [...payload];
    }
    default: {
      return state;
    }
  }
}

export default currentArticlesReducer;
