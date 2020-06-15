import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

import getShoppingBag from "../api/getShoppingBag";
import { linkButton } from "../components/styles/navigation-button.module.scss";
import ArticleGrid from "../components/article-grid/ArticleGrid";

function Bag({ shoppingBag }) {
  console.log(shoppingBag);
  const query = "id=" + shoppingBag.map(({ id }) => id).join("&id=");

  const { status, data } = useQuery(["shoppingbag", query], getShoppingBag);
  return <ArticleGrid status={status} data={data} wide />;
}

function ShoppingBag() {
  const shoppingBag = useSelector((state) => state.shoppingBag);

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
