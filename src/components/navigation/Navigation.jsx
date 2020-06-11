import React, { Suspense, lazy, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "../styles/navigation.module.scss";

import { nextPage, prevPage, goToPage } from "../../redux/actionTypes";
import { selectNavigation } from "../../redux/selectors";

const ButtonPrevious = lazy(() => import("./ButtonPrevious"));
const ButtonNext = lazy(() => import("./ButtonNext"));

function Navigation() {
  const dispatch = useDispatch();
  const { currentPage, maxPagesReached } = useSelector(selectNavigation);

  // dispatch can cause useless re-render they must be wrapped in useCallBack

  const dispatchNextPage = useCallback(() => dispatch({ type: nextPage }), [
    dispatch,
  ]);
  const dispatchPrevPage = useCallback(() => dispatch({ type: prevPage }), [
    dispatch,
  ]);

  const dispatchSpecificPage = useCallback(
    (pageNumber) => dispatch({ type: goToPage, payload: pageNumber }),
    [dispatch],
  );

  // too many "complex" conditions can make JSX hard to read

  const canDisplayButtonNext =
    !maxPagesReached || currentPage < maxPagesReached;

  const canDisplayButtonPrevious = currentPage > 1;

  const canDisplayPlusOne =
    !maxPagesReached || currentPage + 1 < maxPagesReached;
  const canDisplayMinusOne = currentPage - 1 > 1;

  const canDisplayBackToFirstPage = currentPage >= 15

  return (
    <div className={styles.navigationContainer}>
      <Suspense
        fallback={
          <span role="img" aria-label="previous">
            ⬅️
          </span>
        }
      >
        {canDisplayButtonPrevious && (
          <ButtonPrevious dispatchPage={dispatchPrevPage} />
        )}
      </Suspense>
      {canDisplayBackToFirstPage && (
        <button
          className={styles.pageButton}
          onClick={() => dispatchSpecificPage(1)}
        >
          1
        </button>
      )}

      {canDisplayMinusOne && (
        <button
          className={styles.pageButton}
          onClick={() => dispatchSpecificPage(currentPage - 1)}
        >
          {currentPage - 1}
        </button>
      )}
      <div>{currentPage}</div>
      {canDisplayPlusOne && (
        <button
          className={styles.pageButton}
          onClick={() => dispatchSpecificPage(currentPage + 1)}
        >
          {currentPage + 1}
        </button>
      )}

      <Suspense
        fallback={
          <span role="img" aria-label="next">
            ➡️
          </span>
        }
      >
        {canDisplayButtonNext && <ButtonNext dispatchPage={dispatchNextPage} />}
      </Suspense>
    </div>
  );
}

// useSelector can also  cause useless re-render,
// component should be wrapped in memo to avoid that

// One could also use the classic approach mapStateToProps+mapDispatchToProps+Connect
// But I find the hook approach more readable

export default memo(Navigation);
