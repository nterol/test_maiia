import React, { useEffect, useState, useRef } from "react";

import styles from "../styles/article.module.scss";
import { thumbnail } from "../styles/skeleton.module.scss";
import ShopButton from "./ShopButton";

const ThumbnailWithSkeleton = ({ imgLoaded, currentRef }) =>
  imgLoaded ? (
    <div className={styles.coverContainer}>
      <img
        className={styles.thumbnail}
        src={currentRef.src}
        alt="article cover"
      />
    </div>
  ) : (
    <hr className={thumbnail} />
  );

function Article({ title, imageUrl, articleId }) {
  const thumbnailRef = useRef(null);

  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    thumbnailRef.current = new Image();
    thumbnailRef.current.src = imageUrl;
    if (thumbnailRef.current.complete) setImgLoaded(true);
    else thumbnailRef.current.onload = () => setImgLoaded(true);
  }, [imageUrl]);

  return (
    <article className={styles.article}>
      <ThumbnailWithSkeleton
        imgLoaded={imgLoaded}
        currentRef={thumbnailRef.current}
      />
      <h3>{title}</h3>
      <ShopButton articleId={articleId} />
    </article>
  );
}

export default Article;
