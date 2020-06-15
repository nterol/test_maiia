import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "../styles/layout.module.scss";
import SkeletonArticle from "./SkeletonArticle";

const Skeletons = ({ isLoading }) => (
  <AnimatePresence>
    {isLoading && (
      <motion.section exit={{y: 100}} className={styles.grid}>
        <SkeletonArticle simple={3} duration={0.9} />
        <SkeletonArticle simple={4} duration={0.7} />
        <SkeletonArticle simple={1} duration={0.5} />
        <SkeletonArticle simple={6} duration={0.3} />
        <SkeletonArticle simple={5} duration={0.2} />
      </motion.section>
    )}
  </AnimatePresence>
);

export default Skeletons;
