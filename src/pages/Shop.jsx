import React, { memo, useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";

import getArticles from "../api/getArticles";
import Navigation from "../components/navigation";
import { selectNavigation } from "../redux/selectors";
import { setMaxPage } from "../redux/actionTypes";
import GoToPageButton from "../components/navigation/GoToPageButton";
import ArticleGrid from "../components/article-grid/ArticleGrid";

function Shop() {
  const { currentPage, maxPagesReached } = useSelector(selectNavigation);
  const { status, data } = useQuery(["articles", currentPage], getArticles);

  const dispatch = useDispatch();

  const dispatchMaxPagesReached = useCallback(
    (maxPage) => dispatch({ type: setMaxPage, payload: maxPage }),
    [dispatch],
  );

  useEffect(() => {
    if (status === "success" && !data.length)
      dispatchMaxPagesReached(currentPage);
  }, [status, data, dispatchMaxPagesReached, currentPage]);

  const maxPageIsReached = !!maxPagesReached && currentPage === maxPagesReached;

  return (
    <>
      <ArticleGrid status={status} data={data}>
        {maxPageIsReached && (
          <div>
            It seems we're out of article{" "}
            <span role="img" aria-label="out of article">
              😢
            </span>
            <br />
            ... Would like to return to first page ? <GoToPageButton page={1} />
          </div>
        )}
      </ArticleGrid>
      {status === "success" && !maxPageIsReached && (
        <section>
          <Navigation />
        </section>
      )}
    </>
  );
}

export default memo(Shop);
