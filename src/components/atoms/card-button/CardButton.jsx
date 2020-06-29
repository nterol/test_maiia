import React from "react";
import { func, oneOf } from "prop-types";

import styles from "./styles.module.scss";

const CardButton = ({ children, handleClick }) => (
  <button onClick={handleClick} className={styles.cardButton}>
    {children}
  </button>
);

CardButton.propTypes = {
  children: oneOf(["+", "-"]).isRequired,
  handleClick: func.isRequired,
};

export default CardButton;
