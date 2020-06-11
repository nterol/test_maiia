import React, { useCallback, memo, useMemo } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { number } from "prop-types";

import styles from "../styles/shop-button.module.scss";
import { addArticle, removeArticle } from "../../redux/actionTypes";
import { createSelector } from "reselect";
import Shop from "../../pages/Shop";

// this is why I'd like to try recoil in prod

// const makeSelectorIsInShoppingBag = () =>
//   createSelector(
//     (state) => state.shoppingBag,
//     (_, articleId) => articleId,
//     (shoppingBag, articleId) =>
//       shoppingBag.findIndex((e) => e === articleId) > -1,
//   );

// const SelectorIsInShoppingBagWithProps = ({ articleId }) => {
//   const memoizedSelectorIsInShoppingBag = useMemo(makeSelectorIsInShoppingBag, [
//     articleId,
//   ]);

//   const makeSelector = useSelector((state) =>
//     memoizedSelectorIsInShoppingBag(state, articleId),
//   );

//   return makeSelector;
// };

function ShopButton({ articleId, isInShoppingBag }) {
  // const isInShoppingBag = SelectorIsInShoppingBagWithProps({ articleId });

  const dispatch = useDispatch();

  const dispatchAddToShoppingBag = useCallback(
    (articleId) => dispatch({ type: addArticle, payload: articleId }),
    [dispatch],
  );

  const dispatchRemoveFromShoppingBag = useCallback(
    (articleId) => dispatch({ type: removeArticle, payload: articleId }),
    [dispatch],
  );

  return (
    <button
      onClick={() =>
        isInShoppingBag
          ? dispatchRemoveFromShoppingBag(articleId)
          : dispatchAddToShoppingBag(articleId)
      }
      className={styles.shopButton}
    >
      {isInShoppingBag ? "-" : "+"}
    </button>
  );
}

ShopButton.propTypes = {
  articleId: number.isRequired,
};

const mapStateToProps = (state, { articleId }) => {
  console.log(state);
  return {
    isInShoppingBag: state.shoppingBag.findIndex((e) => e === articleId) > -1,
  };
};

const withConnect = connect(mapStateToProps);

export default memo(withConnect(ShopButton));
