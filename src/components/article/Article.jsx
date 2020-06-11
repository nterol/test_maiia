import React, { useEffect, useState, useRef } from "react";
import { string, number } from "prop-types";

import styles from "../styles/article.module.scss";
import ShopButton from "./ShopButton";

const ThumbnailWithSkeleton = ({ imgLoaded, currentRef }) =>
  imgLoaded ? (
    <div className={styles.coverContainer}>
      <img className={styles.cover} src={currentRef.src} alt="article cover" />
    </div>
  ) : (
    <hr className={styles.image} />
  );

function Article({ title, thumbnailUrl, articleId }) {
  const thumbnailRef = useRef(null);

  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    thumbnailRef.current = new Image();
    thumbnailRef.current.src = thumbnailUrl;
    if (thumbnailRef.current.complete) setImgLoaded(true);
    else thumbnailRef.current.onload = () => setImgLoaded(true);
  }, [thumbnailUrl]);

  return (
    <article className={styles.article}>
      <ThumbnailWithSkeleton
        imgLoaded={imgLoaded}
        currentRef={thumbnailRef.current}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>{title}</h3>
        <ShopButton articleId={articleId} />
      </div>
    </article>
  );
}

Article.propTypes = {
  title: string.isRequired,
  thumbnailUrl: string.isRequired,
  articleId: number.isRequireed,
};

export default Article;
