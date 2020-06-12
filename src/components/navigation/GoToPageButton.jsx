import React, { useCallback } from "react";


import { pageButton } from "../styles/navigation-button.module.scss";
import { goToPage } from "../../redux/actionTypes";
import { useDispatch } from "react-redux";
import { number, string } from "prop-types";

function GoToPageButton({ page, children }) {
  const dispatch = useDispatch();
  const dispatchSpecificPage = useCallback(
    (pageNumber) => dispatch({ type: goToPage, payload: pageNumber }),
    [dispatch],
  );
  return (
    <button data-testid="goto-page-button" className={`${pageButton} carved`} onClick={() => dispatchSpecificPage(page)}>
      {children || page}
    </button>
  );
}

GoToPageButton.defaultProps = {
  children: null,
};

GoToPageButton.propTypes = {
  page: number.isRequired,
  children: string,
};

export default GoToPageButton;
