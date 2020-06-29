import React from "react";
import { motion } from "framer-motion";
import { string } from "prop-types";

import styles from "./styles.module.scss";

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

Error.propTypes = {
  children: string.isRequired,
};

export default Error;
