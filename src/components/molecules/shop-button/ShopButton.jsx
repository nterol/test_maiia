import React, { useCallback, memo } from "react";
import { useDispatch, connect } from "react-redux";
import c from "classnames";
import { number, bool } from "prop-types";

import CardButton from "../../atoms/card-button/CardButton";
import styles from "./styles.module.scss";
import { addArticle, removeArticle } from "../../../redux/actionTypes";

export function ShopButton({ articleId, isInShoppingBag }) {
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
      <CardButton handleClick={() => dispatchAddToShoppingBag(articleId)}>
        +
      </CardButton>
      {isInShoppingBag && (
        <CardButton
          handleClick={() => dispatchRemoveFromShoppingBag(articleId)}
        >
          -
        </CardButton>
      )}
    </div>
  );
}

ShopButton.propTypes = {
  articleId: number.isRequired,
  isInShoppingBag: bool.isRequired,
};

// whenever I use ownProps with useSelector, heavy re-render occurs
// avoiding them require more lines of code.
// This approach is shorter
const mapStateToProps = (state, { articleId }) => ({
  isInShoppingBag:
    state.shoppingBag.findIndex(({ id }) => id === articleId) > -1,
});

const withConnect = connect(mapStateToProps);

export default memo(withConnect(ShopButton));
