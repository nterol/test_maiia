import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

import getShoppingBag from "../api/getShoppingBag";
import Skeletons from "../components/skeleton/Skeletons";
import styles from "../components/styles/layout.module.scss";
import { linkButton } from "../components/styles/navigation-button.module.scss";
import Article from "../components/article/Article";

function Bag({ shoppingBag }) {
  const query = "id=" + shoppingBag.join("&id=");

  const { status, data } = useQuery(["shoppingbag", query], getShoppingBag);
  return (
    <section className={styles.grid}>
      {status === "loading" ? (
        <Skeletons />
      ) : status === "error" ? (
        <div>There was an error...</div>
      ) : (
        data.map(({ id, title, url }) => (
          <Article
            key={id}
            title={title}
            thumbnailUrl={url}
            articleId={id}
            noButton
          />
        ))
      )}
    </section>
  );
}

function ShoppingBag() {
  const shoppingBag = useSelector((state) => state.shoppingBag);

  console.log(shoppingBag);

  if (!shoppingBag.length)
    return (
      <section style={{ height: "50vh" }}>
        <div style={{ marginBottom: "3em" }}>
          You shopping bag is empty at the moment
        </div>
        <Link to="/" className={linkButton}>
          <IoIosArrowRoundBack size="1em" />
          <span>Back to shopping</span>
        </Link>
      </section>
    );
  else return <Bag shoppingBag={shoppingBag} />;
}

export default ShoppingBag;
