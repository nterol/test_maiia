import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import c from "classnames";

import { IoIosBasket } from "react-icons/io";

import styles from "./styles.module.scss";
import { selectShoppingBagLength } from "../../../redux/selectors";

function Header() {
  const basketCount = useSelector(selectShoppingBagLength);

  return (
    <header>
      <Link to="/">
        <h1 className="carved-light">Lambda shop</h1>
      </Link>
      <button className={styles.cart}>
        <a
          href="/cart"
          className={c({ [styles.badge]: basketCount > 0 })}
          data-count={basketCount}
        >
          <IoIosBasket size="2em" color="" />
        </a>
      </button>
    </header>
  );
}

export default memo(Header);
