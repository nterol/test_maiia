import React from "react";
import { motion } from "framer-motion";

import styles from "../styles/skeleton.module.scss";
import articlestyles from "../styles/article.module.scss";
import { SkeletonThumbnail } from "./SkeletonThumbnail";

const variants = {
  enter: { y: -100, opacity: 0 },
  visible: { opacity: 1, y: 0 },
  exit: () => ({ y: 100, opacity: 0 }),
};

const SkeletonArticle = ({ simple, duration }) => (
  <motion.article
    whileHover={{ scale: 1.05 }}
    initial="enter"
    variants={variants}
    animate="visible"
    exit="exit"
    transition={{
      duration,
      opacity: { duration: duration + 0.5 },
    }}
    className={articlestyles.article}
  >
    <SkeletonThumbnail />
    {Array.from({ length: simple }).map((_, i) => (
      <hr key={i} className={styles.hr} />
    ))}
  </motion.article>
);

export default SkeletonArticle;
