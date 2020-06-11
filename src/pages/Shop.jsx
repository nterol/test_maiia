import React, { memo } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

import Header from "../components/header/Header";
import Article from "../components/article/Article";
import styles from "../components/styles/layout.module.scss";
import getArticles from "../api/getArticles";
import SkeletonArticle from "../components/skeleton/SkeletonArticle";
import Navigation from "../components/navigation";
import { selectCurrentPage } from "../redux/selectors";

function Shop() {
  const currentPage = useSelector(selectCurrentPage);
  const { status, data } = useQuery(["articles", currentPage], getArticles);

  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.grid}>
        {status === "loading" ? (
          <>
            <SkeletonArticle simple={3} />
            <SkeletonArticle simple={4} />
            <SkeletonArticle simple={1} />
            <SkeletonArticle simple={6} />
            <SkeletonArticle simple={5} />
          </>
        ) : status === "error" ? (
          <div>There was an error...</div>
        ) : (
          data.map(({ id, title, thumbnailUrl }) => (
            <Article
              key={id}
              title={title}
              thumbnailUrl={thumbnailUrl}
              articleId={id}
            />
          ))
        )}
      </section>
      <section>
        <Navigation />
      </section>
    </div>
  );
}

export default memo(Shop);
