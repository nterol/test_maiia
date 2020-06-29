import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { func } from "prop-types";

import styles from "./styles.module.scss";

function ButtonPrevious({ dispatchPage }) {
  return (
    <button
      data-testid="button-previous"
      onClick={() => dispatchPage()}
      className={styles.navButton}
    >
      <IoIosArrowRoundBack size="2em" color="" />
    </button>
  );
}

ButtonPrevious.propTypes = {
  dispatchPage: func.isRequired,
};

export default ButtonPrevious;
