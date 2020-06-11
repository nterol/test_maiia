import React from "react";
import { usePaginatedQuery } from "react-query";

import store from "./redux/store";
import Header from "./components/header/Header";
import Article from "./components/article/Article";
import styles from "./components/styles/layout.module.scss";
import getArticles from "./api/getArticles";
import SkeletonArticle from "./components/skeleton/SkeletonArticle";
import Navigation from "./components/navigation";
import { Provider } from "react-redux";

function RawApp() {
  const { status, data } = usePaginatedQuery(["articles", 1], getArticles);
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
            <Article key={id} title={title} thumbnailUrl={thumbnailUrl} articleId={id} />
          ))
        )}
      </section>
      <section>
        <Navigation />
      </section>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <RawApp />
    </Provider>
  );
}

export default App;
