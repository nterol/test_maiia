import React, { useCallback, memo } from "react";
import { useDispatch, connect } from "react-redux";
import c from "classnames";

import { number, bool } from "prop-types";

import styles from "../styles/shop-button.module.scss";
import { addArticle, removeArticle } from "../../redux/actionTypes";

function ShopButton({ articleId, isInShoppingBag }) {
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
    <div
      className={c(styles.container, { [styles.notInBag]: !isInShoppingBag })}
    >
      <button
        onClick={() => dispatchAddToShoppingBag(articleId)}
        className={styles.test}
      >
        +
      </button>
      {isInShoppingBag && (
        <button
          className={styles.test}
          onClick={() => dispatchRemoveFromShoppingBag(articleId)}
        >
          -
        </button>
      )}
    </div>
  );
}

ShopButton.propTypes = {
  articleId: number.isRequired,
  isInShoppingBag: bool.isRequired,
};

const mapStateToProps = (state, { articleId }) => ({
  isInShoppingBag:
    state.shoppingBag.findIndex(({ id }) => id === articleId) > -1,
});

const withConnect = connect(mapStateToProps);

export default memo(withConnect(ShopButton));
