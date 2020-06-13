import React, { Suspense, lazy } from "react";
import { bool, string, arrayOf, object, node } from "prop-types";

import styles from "../styles/layout.module.scss";
import Skeletons from "../skeleton/Skeletons";

const Error = lazy(() => import("../error/Error"));
const Article = lazy(() => import("../article/Article"));

function ArticleGrid({ status, data, wide, children }) {
  console.log(status);
  return (
    <>
      <Suspense fallback={<div>There was an error...</div>}>
        {status === "error" && <Error>Could not fetch articles...</Error>}
      </Suspense>
      <section className={styles.grid}>
        {children}
        <Skeletons isLoading={status === "loading"} />

        {status === "success" && (
          <Suspense fallback={<div>loading</div>}>
            {data.map(({ id, title, url, thumbnailUrl }) => (
              <Article
                key={id}
                title={title}
                imageUrl={wide ? url : thumbnailUrl}
                articleId={id}
              />
            ))}
          </Suspense>
        )}
      </section>
    </>
  );
}

ArticleGrid.defaultProps = {
  wide: false,
  data: undefined,
  children: null,
};

Article.propTypes = {
  wide: bool,
  status: string.isRequired,
  data: arrayOf(object),
  children: node,
};

export default ArticleGrid;
