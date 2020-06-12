import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { func } from "prop-types";

import styles from "../styles/navigation-button.module.scss";

function ButtonNext({ dispatchPage }) {
  return (
    <button
      data-testid="button-next"
      onClick={() => {
        dispatchPage();
      }}
      className={styles.navButton}
    >
      <IoIosArrowRoundForward size="2em" color="" />
    </button>
  );
}

ButtonNext.propTypes = {
  dispatchPage: func.isRequired,
};

export default ButtonNext;
