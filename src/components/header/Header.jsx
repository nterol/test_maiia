import React from "react";

import { IoIosBasket } from "react-icons/io";

import styles from "../styles/header.module.scss";

function Header() {
  const basketCount = 4;
  return (
    <header>
      <h1>Stuff</h1>
      <button className={styles.cart}>
        <a
          href="/cart"
          className={basketCount && styles.badge}
          data-count={basketCount}
        >
          <IoIosBasket size="2em" color="" />
        </a>
      </button>
    </header>
  );
}

export default Header;
