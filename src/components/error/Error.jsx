import React from "react";
import { motion } from "framer-motion";

import styles from "../styles/error.module.scss";

const Error = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, width: 0 }}
    animate={{ opacity: 1, width: "100%" }}
    transition={{ duration: 0.5 }}
    className={styles.errorContainer}
  >
    <p className="carved-light">{children}</p>
  </motion.div>
);

export default Error;
