import React, { memo } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

import Article from "../components/article/Article";
import styles from "../components/styles/layout.module.scss";
import getArticles from "../api/getArticles";
import Navigation from "../components/navigation";
import { selectCurrentPage } from "../redux/selectors";
import Skeletons from "../components/skeleton/Skeletons";

function Shop() {
  const currentPage = useSelector(selectCurrentPage);
  const { status, data } = useQuery(["articles", currentPage], getArticles);

  return (
    <>
      <section className={styles.grid}>
        {status === "loading" ? (
          <Skeletons />
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
    </>
  );
}

export default memo(Shop);
  