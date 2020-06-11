import React, { memo } from "react";
import { useSelector } from "react-redux";

import { IoIosBasket } from "react-icons/io";

import styles from "../styles/header.module.scss";
import { selectShoppingBagLength } from "../../redux/selectors";

function Header() {
  const basketCount = useSelector(selectShoppingBagLength);
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

export default memo(Header);
