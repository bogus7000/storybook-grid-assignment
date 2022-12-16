import React from "react";
import PropTypes from "prop-types";
import "./grid-row.scss";

export const GridRow = ({ hideBelow, children }) => {
  return hideBelow ? (
    <div className={`grid__row hide-below-${hideBelow}`}>{children}</div>
  ) : (
    <div className="grid__row">{children}</div>
  );
};

GridRow.propTypes = {
  children: PropTypes.node,
  hideBelow: PropTypes.oneOf(["sm", "md", "lg", "xlg"]),
};
