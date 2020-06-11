import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { IoIosBasket } from "react-icons/io";

import styles from "../styles/header.module.scss";
import { selectShoppingBag } from "../../redux/selectors";

function Header() {
  // const basketCount = useSelector(selectShoppingBagLength);
  const shoppingBag = useSelector(selectShoppingBag);

  const { length: basketCount } = shoppingBag;
  return (
    <header>
      <Link to="/">
        <h1>Lambda shop</h1>
      </Link>
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
