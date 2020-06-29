import React, { memo } from "react";
import { number } from "prop-types";

import { quantityContainer } from "./styles.module.scss";
import { connect } from "react-redux";

export function Quantity({ quantity }) {
  return (
    quantity && (
      <div className={quantityContainer}>
        <p>{`${quantity} item${quantity > 1 ? "s" : ""} in your bag`}</p>
      </div>
    )
  );
}

const mapStateToProps = (state, { articleId }) => ({
  quantity:
    state.shoppingBag.find(({ id }) => id === articleId)?.quantity || null,
});

Quantity.propTypes = {
  articleId: number.isRequired,
  quantity: number,
};

const withConnect = connect(mapStateToProps);

export default memo(withConnect(Quantity));
