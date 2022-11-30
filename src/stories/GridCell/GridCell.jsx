import React from "react";
import PropTypes from "prop-types";

export const GridCell = ({ hideBelow, children }) => {
  return hideBelow ? (
    <div className={`grid__cell hide-below-${hideBelow}`}>{children}</div>
  ) : (
    <div className="grid__cell">{children}</div>
  );
};

GridCell.propTypes = {
  children: PropTypes.node,
  hideBelow: PropTypes.oneOf(["sm", "md", "lg", "xlg"]),
};
