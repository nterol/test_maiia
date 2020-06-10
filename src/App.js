import React from "react";
import { useQuery } from "react-query";

import Header from "./components/header/Header";
import styles from "./components/layout.module.scss";
import getArticles from './api/getArticles';

function App() {
  const { status, data, error, isFetching } = useQuery(["articles", 1], getArticles);

  console.log(status,  data, error, isFetching);


  return (
    <div className={styles.page}>
      <Header />
      <section className={styles.grid}>
        <article>coucou</article>
        <article>yes</article>
        <article>Yo</article>
      </section>
    </div>
  );
}

export default App;
