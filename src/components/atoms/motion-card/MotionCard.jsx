import React from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";

const MotionCard = ({ children, ...animationProps }) => {
  return (
    <motion.article className={styles.card} {...animationProps}>
      {children}
    </motion.article>
  );
};

export default MotionCard;
