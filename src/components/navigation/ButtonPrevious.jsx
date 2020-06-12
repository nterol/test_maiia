import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { func } from "prop-types";

import styles from "../styles/navigation-button.module.scss";

/* 
  So I could have made a simple Button instead of two
 that would take an svg as child component
 But I  wanted to lazy load the svgs 
 And I had trouble lazy loading them directly
 So here where are 
 */

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
