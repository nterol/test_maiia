import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

import styles from "../styles/navigation-button.module.scss";

function ButtonPrevious() {
  return (
    <button className={styles.navButton} >
      <IoIosArrowRoundBack size="2em" color="" />
    </button>
  );
}

export default ButtonPrevious;
