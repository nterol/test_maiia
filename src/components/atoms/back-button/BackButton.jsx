import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

import styles from "./styles.module.scss";

const BackButton = () => (
  <Link to="/" className={styles.linkButton}>
    <IoIosArrowRoundBack size="1em" />
    <span>Back to shopping</span>
  </Link>
);

export default BackButton;
