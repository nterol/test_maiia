import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { func } from "prop-types";

import styles from "../styles/navigation-button.module.scss";

function ButtonPrevious({ dispatchPage }) {
  return (
    <button onClick={() => dispatchPage()} className={styles.navButton}>
      <IoIosArrowRoundForward size="2em" color="" />
    </button>
  );
}

ButtonPrevious.propTypes = {
  dispatchPage: func.isRequired,
};

export default ButtonPrevious;
