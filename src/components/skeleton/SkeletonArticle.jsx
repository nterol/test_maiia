import React from "react";

import styles from "../styles/skeleton.module.scss";
import articlestyles from '../styles/article.module.scss';
import { SkeletonThumbnail } from "./SkeletonThumbnail";

const SkeletonArticle = ({ simple }) => (
  <article className={articlestyles.article}>
    <SkeletonThumbnail />
    {Array.from({ length: simple }).map((_, i) => (
      <hr key={i} className={styles.hr} />
    ))}
    
  </article>
);

export default SkeletonArticle;
