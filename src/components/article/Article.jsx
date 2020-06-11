import React, { useEffect, useState, useRef } from "react";
import { string, number, bool } from "prop-types";

import styles from "../styles/article.module.scss";
import { thumbnail } from "../styles/skeleton.module.scss";
import ShopButton from './ShopButton'

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

function Article({ title, thumbnailUrl, articleId, noButton }) {
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
      <h3>{title}</h3>

      {!noButton && <ShopButton articleId={articleId} />}
    </article>
  );
}

Article.defaultProps = {
  noButton: false,
};

Article.propTypes = {
  title: string.isRequired,
  thumbnailUrl: string.isRequired,
  articleId: number.isRequireed,
  noButton: bool,
};

export default Article;
