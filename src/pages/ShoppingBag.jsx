import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

import getShoppingBag from "../api/getShoppingBag";
import BackButton from "../components/atoms/back-button/BackButton";
import ArticleGrid from "../components/templates/article-grid/ArticleGrid";

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
        <BackButton />
      </section>
    );
  else return <Bag shoppingBag={shoppingBag} />;
}

export default ShoppingBag;
