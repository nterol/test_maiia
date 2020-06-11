import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { number } from "prop-types";

import styles from "../styles/shop-button.module.scss";
import { addArticle, removeArticle } from "../../redux/actionTypes";

function ShopButton({ articleId }) {
  const dispatch = useDispatch();

  const dispatchAddToShoppingBag = useCallback(
    (articleId) => dispatch({ type: addArticle, payload: articleId }),
    [dispatch],
  );

  const dispatchRemoveToShoppingBag = useCallback(
    (articleId) => dispatch({ type: removeArticle, payload: articleId }),
    [dispatch],
  );

  return (
    <button
      onClick={() => dispatchAddToShoppingBag(articleId)}
      className={styles.shopButton}
    >
      +
    </button>
  );
}

ShopButton.propTypes = {
  articleId: number.isRequired,
};

export default ShopButton;
