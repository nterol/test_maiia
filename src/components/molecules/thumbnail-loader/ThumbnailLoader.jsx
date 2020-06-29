import React from "react";

import styles from "./styles.module.scss";
import SkeletonThumbnail from "../../atoms/skeleton-thumbnail/SkeletonThumbnail";

const ThumbnailLoader = ({ imgLoaded, currentRef }) =>
  imgLoaded ? (
    <div className={styles.coverContainer}>
      <img
        className={styles.thumbnail}
        src={currentRef.src}
        alt="article cover"
      />
    </div>
  ) : (
    <SkeletonThumbnail />
  );

export default ThumbnailLoader;
